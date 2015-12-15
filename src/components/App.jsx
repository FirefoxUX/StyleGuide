const React = require('react');
const generateSources = require('./generateSources');

const TableOfContents = React.createFactory(require('./TableOfContents.jsx'));
const Editor = React.createFactory(require('./Editor.jsx'));

const App = React.createClass({
  displayName: 'App',

  getInitialState: function() {
    const sources = generateSources();
    return { sources: sources,
             selectedSourceName: sources[0].title };
  },

  handleNavigation: function() {
    const sources = generateSources();
    this.setState({ sources: sources,
                    selectedSourceName: sources[0].title });
  },

  handleItemSelected: function(source) {
    this.setState({ selectedSourceName: source.title });
  },

  render: function() {
    const { sources, selectedSourceName } = this.state;
    const selectedSource = sources.find(source => source.title === selectedSourceName);
    return (<div className={"app " + (selectedSource ? selectedSource.className : "")}>
      <div className="toolbar">
        <div className="title">
          <h2>{"Firefox"}<br/>{"Style Guide v1.0"}</h2>
          <small>{"Updated today"}</small>
        </div>
        <div className="section">
          <input placeholder="🔍 Search the style guide"
              type="search"
          ></input>
        </div>
      </div>
      <div className="content">
        <TableOfContents items={sources}
            onItemSelected={this.handleItemSelected}
            selectedItem={selectedSource}
        />
        <Editor source={selectedSource} />
      </div>
    </div>);
  }
});

module.exports = App;
