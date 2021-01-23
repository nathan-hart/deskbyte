<template>
  <div class="byte">
    <div class="byte-info">
      <div class="byte-title">
        <h1 v-if="user.isAdmin">Your Byte</h1>
        <h1 v-else>{{ user.username }}'s Byte</h1>
      </div>
      <div class="byte-picture">
        <img src="../data/images/desk1.jpeg" class="image-main" alt="" />
      </div>
      <div class="byte-desc">
        <p></p>
      </div>
    </div>
    <div class="byte-menu">
      <h2>Upvotes</h2>
      <div class="votes">
        <div class="emojis">
          <img class="emoji" src="../assets/emojis/coolEmoji.png" />
          <img class="emoji" src="../assets/emojis/broomEmoji.png" />
          <img class="emoji" src="../assets/emojis/creativeEmoji.png" />
          <img class="emoji" src="../assets/emojis/lightEmoji.png" />
          <img class="emoji" src="../assets/emojis/workEmoji.png" />
          <img class="emoji" src="../assets/emojis/mindblowEmoji.png" />
        </div>
        <ul>
          <li v-for="(value, name, index) in user.upvotes" :key="index">{{ name }}</li>
        </ul>
        <!-- <h4>Upvotes: {{ user.upvotes }}</h4> -->
        <button v-if="!user.isAdmin" @click="upVoteClean()">
          <p>
            Upvote
          </p>
        </button>
      </div>
      <ul>
        <li></li>
      </ul>
    </div>
    <!-- <h1>{{ msg }}</h1> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import emojis from '../';

export default defineComponent({
  name: "Byte",
  // props: {
  //   msg: String
  // }
  data() {
    return {
      upvoteActive: true,
      emojis: ["../assets/emojis/coolEmoji.png"],
      user: {
        id: 1,
        username: "Nathan Hart",
        email: "natan.hart1@gmail.com",
        isAdmin: true,
        images: ["../data/images/desk1.jpeg"],
        upvotes: {
          cool: 20,
          clean: 30,
          creative: 21,
          productive: 56,
          original: 23,
          wow: 78,
        },
      },
    };
  },
  methods: {
    upVoteCreative() {
      this.user.upvotes.creative++;
      this.upvoteActive = false;
    },
    upVoteWow() {
      this.user.upvotes.wow++;
      this.upvoteActive = false;
    },
    upVoteClean() {
      this.user.upvotes.clean++;
      this.upvoteActive = false;
    },
    upVoteCool() {
      this.user.upvotes.cool++;
      this.upvoteActive = false;
    },
    upVoteOrignal() {
      this.user.upvotes.original++;
      this.upvoteActive = false;
    },
    upVoteProductive() {
      this.user.upvotes.productive++;
      this.upvoteActive = false;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.byte {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
  height: 100%;
}

.byte-info {
  width: 70%;
  margin: 1rem;
  border: 2px solid $border-main;
  border-radius: 5px;
}

.byte-menu {
  flex-direction: column;
  width: 30%;
  padding: 1rem;
  margin: 1rem;
  border: 2px solid $border-main;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
}

.votes {
  display: grid;
  grid-template-columns: 1.5rem 5rem auto;
  grid-gap: 0.1rem 0.1rem;
  grid-template-areas: "myArea myArea myArea myArea myArea" 
                       "myArea myArea myArea myArea myArea";
  .emojis {
    display: flex;
    flex-direction: column;

    .emoji {
      width: 1.5rem;
      height: auto;
      margin-bottom: 0.1rem;
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    li {
      margin-bottom: 0.1rem;
    }
  }
}

@media only screen and (max-width: 1200px) {
  .byte {
    width: 95%;
  }
}

.byte-picture {
  max-width: 100%;
  margin: 1rem;
  .image-main {
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
