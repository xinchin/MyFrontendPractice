import $ from 'jquery';
import Home from '../js/Home'
import Person from '../js/Person';

var p1 = new Person();
var p2 = new Person();
p1.greet();

$(function() {
  $('#app').append('Hello jQuery');
})