<template>
  <div class="byte">
    <div class="byte-info">
      <div class="byte-title">
        <h1 v-if="isAdmin">Your Byte</h1>
        <h1 v-else>{{ user.username }}'s Byte</h1>
      </div>
      <div class="byte-picture"></div>
      <div class="byte-desc">
        <p></p>
      </div>
    </div>
    <div class="byte-menu">
      <h4>Upvotes: {{ user.upvotes }}</h4>
      <button @click="upVote()">
        <p>
          Upvote
        </p>
      </button>
      <ul>
        <li></li>
      </ul>
    </div>
    <!-- <h1>{{ msg }}</h1> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Byte",
  // props: {
  //   msg: String
  // }
  data() {
    return {
      upvoteActive: true,
      user: {
        id: 1,
        username: "Nathan Hart",
        email: "natan.hart1@gmail.com",
        isAdmin: true,
        images: [],
        upvotes: 0,
      },
    };
  },
  methods: {
    upVote() {
      this.user.upvotes++;
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
  width: 75%;
}

.byte-info {
  width: 70%;
  margin: 1rem;
  border: 2px solid $border-main;
  border-radius: 5px;
}

.byte-menu {
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 1rem;
  margin: 1rem;
  border: 2px solid $border-main;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
}
</style>
