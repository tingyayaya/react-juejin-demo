import {computed, observable, action } from "mobx";

class RouteMatch {
  @observable match = {}
  
  @action.bound updateMatch(match) {
    this.match = match
  }
  
}

const routeMatch = new RouteMatch()

export default routeMatch