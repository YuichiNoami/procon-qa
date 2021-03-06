<template>
  <div class="answer-panel-detail">
    <v-card
      class="mx-auto"
    >
      <div v-if="isReady">
        <v-row>
          <v-col md="12"> 
            <v-card-text>
              <div class="mavon-editor">
                <mavon-editor
                  v-model="answer.body"
                  defaultOpen="preview"
                  :toolbarsFlag="fa"
                  :subfield="fa"
                  :boxShadow="fa"
                />
              </div>
            </v-card-text>
          </v-col>
        </v-row>
        <v-card-actions>
          <TwitterIcon
            :twitterId="userTwitterId"
            :uid="answer.uid"
            size="60"
            apiSize="b"
          />
          <v-card-text>
            投稿者: 
            <span style="font-size: 14px;">
              <UserName
                :name="userName"
                :uid="answer.uid"
              />
            </span>
            <br>
            投稿日時: {{ answer.date }}
          </v-card-text>
          <v-menu left :offset-x="tr">
            <template v-slot:activator="{ on }">
              <v-btn icon 
                color="error"
                :disabled="name != userName"
                x-large
                v-on="on"
              >
                <v-icon @click="alert = !alert">mdi-delete</v-icon>
              </v-btn> 
            </template>
            <v-card>
              <v-list>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>本当に削除しますか？</v-list-item-title>
                    <v-list-item-subtitle>この操作は取り消せません．</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="menu = false">キャンセル</v-btn>
                <v-btn color="error" @click="deleteAnswer">削除する</v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>

          <!--v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn icon
                color="error"
                :disabled="name != userName"
                x-large
                v-on="on"
              >
                <v-icon @click="alert = !alert">mdi-delete</v-icon>
              </v-btn> 
            </template> 
            <span>消去</span>
          </v-tooltip-->
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn 
                v-if="isFavorited"
                icon
                x-large
                color="pink"
                :disabled="userName === name || userName === '' || name == ''"
                v-on="on"
              >
                <v-icon @click="favoriteAnswer">mdi-heart</v-icon>
                {{ answer.favoriteCount }}
              </v-btn>
              <v-btn 
                v-else
                icon
                x-large
                color="pink lighten-4"
                :disabled="userName === name || userName === '' || name == ''"
                v-on="on"
              >
                <v-icon @click="favoriteAnswer">mdi-heart</v-icon>
                {{ answer.favoriteCount }}
              </v-btn>
            </template>
            <span>いいね</span>
          </v-tooltip>
        </v-card-actions>
      </div>
      <div v-else class="text-center">
        <v-progress-circular
          :size="100"
          color="primary"
          indeterminate
        ></v-progress-circular>
      </div>
      
      <v-col
        md="10"
        class="ml-auto"
      >
        <AnswerComments 
          :aid="answerId"
          :uid="answer.uid"
          :qid="answer.qid"
        />
      </v-col>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { Answer } from '@/models/Answer.ts';
import TwitterIcon from '@/components/TwitterIcon.vue';
import UserName from '@/components/UserName.vue';
import AnswerComments from '@/components/AnswerComments.vue';

@Component({
  components: {
    UserName,
    TwitterIcon,
    AnswerComments,
  },
})
export default class AnswerPanelDetail extends Vue {
  @Prop()
  private answerId!: number;

  private answer: Answer = {
    id: 0,
    uid: 0,
    qid: 0,

    body: '',
    date: '',
  };

  // どうにかならんか?
  private tr: boolean = true;
  private fa: boolean = false;

  // 順に，回答者の名前，ユーザの名前, twitterId
  private userName: string = '';
  private name: string = '';
  private uid: string = '';
  private userTwitterId: string = '';

  // ロード中の制御
  private isReady: boolean = false;

  // 削除の確認画面の制御
  private alert: boolean = false;

  private isFavorited: boolean = false;

  private created(): void {
    if (this.getToken() != null) {
      const claims = JSON.parse(atob(this.getToken().split('.')[1]));
      this.name = claims.name;
      this.uid = claims.uid;
    }
    this.createAnswer();
    this.updateIsFavorite();
  }
  // いいね状態を更新する
  private updateIsFavorite(): void {
    const url = 'api/answer-good/' + String(this.uid) + '/' + String(this.answerId);
    const method = 'GET';
    const headers = {Authorization: `Bearer ${this.getToken()}`};
    fetch(url, {headers}).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return [];
    }).then((json) => {
      this.isFavorited = json;
    });
  }

  private createAnswer(): void {
    const url = 'api/no-auth/answer/' + String(this.answerId);
    const headers = {Authorization: `Bearer ${this.getToken()}`};

    fetch(url, {headers}).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return [];
    }).then((json) => {
      this.answer = json;
      this.setUser();
      this.isReady = true;
    });
  }

  private setUser(): void {

    const url = 'api/no-auth/user/' + String(this.answer.uid);
    const headers = {Authorization: `Bearer ${this.getToken()}`};
    fetch(url, {headers}).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return [];
    }).then((json) => {
      this.userName = json.name;
      this.userTwitterId = json.twitter_id;
    });
  }

  private deleteAnswer(): void {
    const url = 'api/answer/' + String(this.answerId);
    const method = 'DELETE';
    const headers = {Authorization: `Bearer ${this.getToken()}`};

    fetch(url, {method, headers}).then((response) => {
      if (response.ok) {
        alert('回答を削除しました');
        location.reload();
        // リフレッシュ
      }
    });
  }

  private favoriteAnswer(): void {
    const url = 'api/answer/' + String(this.answerId) + '/favorite';
    const method = 'put';
    const headers = {authorization: `Bearer ${this.getToken()}`};
    fetch(url, {method, headers}).then(() => {
      this.updateIsFavorite();
      this.createAnswer();
    });
  }

  private getToken(): any {
    return localStorage.getItem('token');
  }
}
</script>

<style scoped>
.answer-panel-detail {
  margin-top: 30px;
}
.mavon-editor {
  z-index: 0;
}
</style>
