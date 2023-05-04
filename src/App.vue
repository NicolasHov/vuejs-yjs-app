<template>
  <div>
    <h1>Real-time collaboration with Y.js</h1>
    <textarea :style="{ color: user1Color }" v-model="user1Text"></textarea>
    <textarea :style="{ color: user2Color }" v-model="user2Text"></textarea>
  </div>
</template>

<script>
import * as Y from 'yjs'
// import database from './firebase/firebase'
import db from './firebase/firebase.js';

export default {
  data() {
    return {
      user1Text: '',
      user1Color: 'blue',
      user2Text: '',
      user2Color: 'green',
      ydoc: null,
      ytext1: null,
      ytext2: null
    }
  },
  mounted() {

    console.log(db.ref('user/'));
    const ydoc = new Y.Doc()
    const ytext1 = ydoc.getText('user1-text')
    const ytext2 = ydoc.getText('user2-text')

    ytext1.observe(() => {
      this.user1Text = ytext1.toString()
      database.ref('ytext/user1-text').set(ytext1.toJSON())
    })

    ytext2.observe(() => {
      this.user2Text = ytext2.toString()
      database.ref('ytext/user2-text').set(ytext2.toJSON())
    })

    db.ref('ytext/user1-text').once('value', (snapshot) => {
      const data = snapshot.val()
      if (data !== null) {
        ytext1.applyUpdate(Y.encodeStateAsUpdate(Y.decodeStateVector(data)))
      }
    })

    database.ref('ytext/user2-text').once('value', (snapshot) => {
      const data = snapshot.val()
      if (data !== null) {
        ytext2.applyUpdate(Y.encodeStateAsUpdate(Y.decodeStateVector(data)))
      }
    })

    this.ydoc = ydoc
    this.ytext1 = ytext1
    this.ytext2 = ytext2
  },
  beforeUnmount() {
    if (this.ydoc !== null) {
      this.ydoc.destroy()
    }
  },
  methods: {
    updateUser1Yjs() {
      this.ytext1.delete(0, this.ytext1.length)
      this.ytext1.insert(0, this.user1Text)
    },
    updateUser2Yjs() {
      this.ytext2.delete(0, this.ytext2.length)
      this.ytext2.insert(0, this.user2Text)
    }
  },
  watch: {
    user1Text() {
      this.updateUser1Yjs()
    },
    user2Text() {
      this.updateUser2Yjs()
    }
  }
}
</script>
