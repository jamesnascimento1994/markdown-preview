import React, { Component } from 'react';
import './App.css';
import marked from 'marked';

const initialState = `
  This is a paragraph
  **This is bolded text**
  > Block quotes

  # Heading
  ## Heading 2

  - list item 1
  - list item 2
  - list item 3

  [Visit my website](https://james-nascimento-portfolio.netlify.app/)

  This is an inline \`<div></div>\`

  This is a block of code

  \`\`\`
    let x = 1;
    let y = 2;
    let z = y - x;
  \`\`\`

  ![React](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png)
`;

class App extends Component {
	state = {
		text: initialState,
	};

	handleChange = (e) => {
		this.setState({
			text: e.target.value,
		});
	};
	render() {
		const { text } = this.state;
		const markdown = marked(text, { breaks: true });
		return (
			<div className='App'>
				<h1>Markdown Preview</h1>
				<div className='row'>
					<div className='col-6'>
						<h4>Type your markdown below:</h4>
						<textarea
							className='form-control'
							id='editor'
							cols='30'
							rows='10'
							value={text}
							onChange={this.handleChange}
						/>
					</div>
					<div className='col-6'>
						<h4>Result:</h4>
						<div
							className='preview rounded'
							id='preview'
							dangerouslySetInnerHTML={{ __html: markdown }}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
