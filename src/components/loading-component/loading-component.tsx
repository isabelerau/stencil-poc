import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'loading-component',
  styleUrl: 'loading-component.css',
  shadow: true,
})
export class LoadingComponent {
  @State() data: string[] = [];
  @State() isLoading: boolean = true;
  async componentWillLoad() {
    this.isLoading = true;
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json();
    this.data = todos.slice(0, 5).map(todo => todo.title);
    this.isLoading = false;
  }
  render() {
    return (
      <div class="container">
        <h1>Todos</h1>
        {this.isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {this.data.map(title => (
              <li>{title}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}