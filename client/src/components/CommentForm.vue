<template>
  <div class="comment-form">
    <div v-if="isLoggedIn">
      <v-textarea
        rows="1"
        light
        v-model="text"
        outlined
        label="コメント"
      />
      <v-row>
        <v-col
          cols="auto"
          class="mr-auto"
        >
        </v-col>
        <v-col cols="auto">
          <v-btn
            color="primary"
            @click="comment"
            large 
            :disabled="text == ''"
          >コメントを送信</v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
  },
})
export default class CommentForm extends Vue {
  @Prop()
  private qid!: string;
  @Prop()
  private aid!: string;
  @Prop()
  private uid!: string; // これはコメントされる側の id
  @Prop()
  private type!: string; // 通知発行に必要 2 なら質問へのコメント，3 なら回答へのコメント

  private text: string = '';
  private isLoggedIn: boolean = false;
  private created(): void {
    this.isLoggedIn = (this.getToken() != null);
  }
  private getToken(): string | null {
    return localStorage.getItem('token');
  }

  private comment(): void {
    if (this.getToken() === null) {
      alert('server error');
      return;
    }
    const url = (this.type === '2') ? '/api/question-comment' : 'api/answer-comment';
    const method = 'POST';
    const headers = {
      'Authorization': `Bearer ${this.getToken()}`,
      'Content-Type': 'application/json; charset=UTF-8',
    };

    const body = (this.type === '2') ? JSON.stringify({
        body: this.text,
        qid: Number(this.qid),
      }) : JSON.stringify({
        body: this.text,
        aid: Number(this.aid),
      });

    fetch(url, {method, headers, body}).then((response) => {
      if (response.ok) {
        return response.json();
      }
    }).then((json) => {
      if (typeof json !== 'undefined') {
        // 親コンポーネントに発火させる
        this.$emit('comment');
        this.postNotification();
        this.text = '';
      }
    });
  }

  // 通知を発行
  private postNotification(): void {
    const url = 'api/notification/' + this.uid + '/' + this.qid + '/' + this.type;
    const method = 'POST';

    const token = this.getToken();
    if (token === null) {
      alert('server error');
      return;
    }

    const claims = JSON.parse(atob(token.split('.')[1]));
    // コメントする側の id が uid と同じなら，通知を発行しない
    if (this.uid === claims.uid) {
      return;
    }

    const headers = {
      'Authorization': `Bearer ${this.getToken()}`,
      'Content-Type': 'application/json; charset=UTF-8',
    };

    // body もつけるか TODO
    const body = JSON.stringify({
      body: this.text,
    });

    fetch(url, {method, headers, body}).then((response) => {
      if (response.ok) {
        this.userUpdate();
        this.text = '';
      }
    });
  }

  // uid さんの NotficationFlag を true にする
  private userUpdate(): void {
    const url = '/api/notification/' + this.uid + '/1';
    const method = 'PUT';
    const headers = {
      'Authorization': `Bearer ${this.getToken()}`,
      'Content-Type': 'application/json; charset=UTF-8',
    };
    fetch(url, {method, headers});
  }
}
</script>

<style scoped>
.comment-form {
  margin-top: 30px;
}
</style>
