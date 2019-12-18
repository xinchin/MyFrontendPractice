import $ from 'jquery'
import Home from './Home';
import Person from './Person';

var p1 = new Person();
var p2 = new Person();
p1.greet();

$(function() {
  $('#app').append('Hello jQuery');
})