import React from "react";

addItem(e) {
if (this._inputElement.value !== "") {
  var newItem = {
    text: this._inputElement.value,
    key: Date.now()
  };

  this.setState((prevState) => {
    return {
      items: prevState.items.concat(newItem)
    };
  });

  this._inputElement.value = "";
}

console.log(this.state.items);

e.preventDefault();
}

export default addItem;
