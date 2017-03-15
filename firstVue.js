var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date()
  }
});


var app3=new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})


var app4=new Vue({
  el: '#app-4',
  data: {
    message: "First message"
  },
  methods: {
    reverse: function()
    {
      this.message=this.message.split('').reverse().join('');
    }
  }
})


Vue.component('todo-item', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app5=new Vue({
  el: '#app-5',
  data: {
    groceryList: [{
      text: "Vegetable1"
    }, {
      text: "pil"
    }]
  }
})



var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  watch: {
    // whenever question changes, this function will run
    question: function (newQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.getAnswer()
    }
  },
  methods: {
    // _.debounce is a function provided by lodash to limit how
    // often a particularly expensive operation can be run.
    // In this case, we want to limit how often we access
    // yesno.wtf/api, waiting until the user has completely
    // finished typing before making the ajax request. To learn
    // more about the _.debounce function (and its cousin
    // _.throttle), visit: https://lodash.com/docs#debounce
    getAnswer: _.debounce(
      function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Questions usually contain a question mark. ;-)'
          return
        }
        this.answer = 'Thinking...'
        var vm = this
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = _.capitalize(response.data.answer)
          })
          .catch(function (error) {
            vm.answer = 'Error! Could not reach the API. ' + error
          })
      },
      // This is the number of milliseconds we wait for the
      // user to stop typing.
      500
    )
  }
})

Vue.component('todo-item', {
  template: `
    <li>
      {{ title }}
      <button v-on:click="$emit('remove')">X</button>
    </li>
  `,
  props: ['title']
})


var todoVue=new Vue(
  {'el': "#todo-list-example",
    'data': {
      newTodoText: '',
   todos: [
     'Do the dishes',
     'Take out the trash',
     'Mow the lawn'
   ]
    },
    'methods': {
      addNewTodo: function()
      {
        this.todos.push(this.newTodoText);
        this.newTodoText='';
      }
    }
})
