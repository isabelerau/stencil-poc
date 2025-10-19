import { Component, Event, EventEmitter, h, State } from '@stencil/core';

@Component({
  tag: 'task-manager',
  styleUrl: 'task-manager.css',
  shadow: true,
})
export class TaskManager {
  @State() tasks: { id: number; title: string; completed: boolean }[] = [];
  @State() newTask: string = '';
  @Event() taskAdded: EventEmitter<string>;
  handleInput(e: Event) {
    this.newTask = (e.target as HTMLInputElement).value;
  }
  async handleSubmit(e: Event) {
    e.preventDefault();
    if (!this.newTask) return;
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify({ title: this.newTask, completed: false }),
      headers: { 'Content-Type': 'application/json' },
    });
    const task = await response.json();
    this.tasks = [...this.tasks, { id: task.id, title: this.newTask, completed: false }];
    this.taskAdded.emit(this.newTask);
    this.newTask = '';
  }
  toggleTask(id: number) {
    this.tasks = this.tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
  }
  render() {
    return (
      <div class="container">
        <h1>Task Manager</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" value={this.newTask} onInput={e => this.handleInput(e)} placeholder="New task" />
          <button type="submit">Add Task</button>
        </form>
        <ul>
          {this.tasks.map(task => (
            <li key={task.id} class={task.completed ? 'completed' : ''}>
              <input type="checkbox" checked={task.completed} onChange={() => this.toggleTask(task.id)} />
              {task.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}