// jQuery/materializeCss function trigger
$(function(){
	$('.tooltipped').tooltip();
	$("select").formSelect();
});

// Vue.Js codes
var dataStorageName = "todoList",
		todoListStorage = {
			fetch: function() {
				return JSON.parse(localStorage.getItem(dataStorageName) || '[]');
			},
			save: function(todos) {
				return localStorage.setItem(dataStorageName, JSON.stringify(todos));
			}
		};

new Vue({
	el: '#app',
	data: {
		newTodoTitle: '',
		allTodos: 'all',
		todoDone: 'completed',
		todoNotDone: 'notCompleted',
		filterType: this.allTodos,
		editingValue: '',
		todoIndexToEdit: '',
		todoList: todoListStorage.fetch(),
	},
	methods: {
		addTodo: function() {
			if (this.newTodoTitle.trim() != '') {
				this.todoList.push({
					title: this.newTodoTitle,
					isCompleted: false,
				});
				this.newTodoTitle = '';
			}
		},
		editTodo: function(todoIndex) {
			this.editingValue = this.todoList[todoIndex].title;
			this.todoIndexToEdit = todoIndex;
		},
		updateTodo: function() {
			this.todoList[this.todoIndexToEdit].title = this.editingValue;
			this.editingValue = '';
		},
		deleteTodo: function(todoIndex){
			let confirmAlert = confirm(`Are you sure you want to delete ${this.todoList[todoIndex].title} ?`);
			if (confirmAlert) {
				this.todoList.splice(todoIndex, 1);
			}
		},
		clearTodosList: function() {
			let confirmAlert = confirm(`Are you sure you want to delete all todos ?`);
			if (confirmAlert) {
				this.todoList.splice(0, this.todoList.length);
			}
		},
		deleteCompletedTodos: function() {
			let confirmAlert = confirm(`Are you sure you want to delete all completed todos ?`);
			if (confirmAlert) {
				this.todoList.filter((el) => {
					if (el.isCompleted) {
						this.todoList.splice(this.todoList.indexOf(el), 1);
					}
				});
			}
		},
		todosFilter: function() {
			var todoListAfterFilter;
			var ft = this.filterType;
			if (ft == this.todoDone) {
				todoListAfterFilter = this.todoList.filter((el) => {
					return el.isCompleted;
				});
			} else if (ft == this.todoNotDone) {
				todoListAfterFilter = this.todoList.filter((el) => {
					return ! el.isCompleted;
				});
			} else if (ft == this.allTodos) {
				todoListAfterFilter = this.todoList;
			} else {
				todoListAfterFilter = this.todoList;
			}
			return todoListAfterFilter;
		},
		completedTodosLength: function() {
			return this.todoList.filter((el) => {
				if (el.isCompleted) {
					return el;
				}
			}).length;
		},
		notCompletedTodosLength: function() {
			return this.todoList.filter((el) => {
				if (! el.isCompleted) {
					return el;
				}
			}).length;
		},
		makeAllCompleted: function() {
			return this.todoList.forEach((el) => {
				el.isCompleted = true;
			});
		},
		makeAllNotCompleted: function() {
			return this.todoList.forEach((el) => {
				el.isCompleted = false;
			});
		},
		cancelEditing: function() {
			this.editingValue = '';
		},
	},
	watch: {
		todoList: {
			handler: function(todoList) {
				todoListStorage.save(todoList);
			},
			deep: true,
		}
	},
});