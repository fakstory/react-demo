// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as data from './data.js';
import 'webix/webix.js';
import 'webix/webix.css';

class FilmsView extends Component {
  render() {
    return (
      <div ref="root" style={{height:"100%"}}></div>
    );
  }

  componentDidMount(){
    var tree = {
      view:"tree", id:"tree", gravity: 0.25,
      select:true
    };

    var grid = {
      view:"datatable", id:"grid", autoConfig:true,
      select:true
    };

    debugger; 
    let fm = window.webix.ui({
      cols:[
        tree, 
        { view:"resizer" },
        grid
      ],
      isolate:true,

      container:ReactDOM.findDOMNode(this.refs.root)
    });

    fm.$$("tree").parse(data.tree());
    fm.$$("grid").parse(data.grid());
  }

  shouldComponentUpdate(){
  	// as component is not linked to the external data, there is no need in updates
    return false;
  }

}

export default FilmsView;
