<template>
  <div class="ranking-panel">
    <v-card
      class="mx-auto"
      max-width="344"
      outlined
    >
      <v-app-bar
        color="rgb(66, 66, 66)"
        flat
        dense
      >
        <v-toolbar-title class="title">ランキング</v-toolbar-title>
      </v-app-bar>
      <div v-if="isReady">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list dense>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>順位</v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-title>ユーザ</v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-title>獲得いいね数</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item
                v-for="(user, i) in users"
                :key="i"
              >
                <v-list-item-content>
                  {{ i + 1 }}
                </v-list-item-content>
                <v-list-item-content>
                  <!--UserName
                    :name="user.name"
                    :color="user.color"
                  /-->
                  <UserName
                    :name="user.name"
                    :uid="user.id"
                  />
                </v-list-item-content>
                <v-list-item-content>
                    <v-list-item-title>
                      <span class="userFavoriteSum">{{ user.favorite_sum }}</span>
                    </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>

          </v-list-item-content>
        </v-list-item>
      </div>
      <div v-else>
        <v-skeleton-loader
          class="mx-auto"
          max-width="344"
          type="list-item"
        ></v-skeleton-loader>
        <v-skeleton-loader
          class="mx-auto"
          max-width="344"
          type="list-item"
        ></v-skeleton-loader>
        <v-skeleton-loader
          class="mx-auto"
          max-width="344"
          type="list-item"
        ></v-skeleton-loader>
        <v-skeleton-loader
          class="mx-auto"
          max-width="344"
          type="list-item"
        ></v-skeleton-loader>
      </div>
    </v-card>
  </div>
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import UserName from '@/components/UserName.vue';

@Component({
  components: {
    UserName,
  },
})
export default class RankingPanel extends Vue {
  private users: any = {};
  private isReady: boolean = false;
  private created(): void {
    // user をページ取得する
    const url = '/api/no-auth/users/1/1';
    fetch(url).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return [];
    }).then((json) => {
      this.users = json;
      this.isReady = true;
    });
  }
}
</script>

<style>
.title {
  color: rgb(256, 256, 256);
}
.userFavoriteSum {
  margin-left: 10px;
}
</style>
