'use strict';

const btns = document.querySelector('.question-anser-btn');

const openQuestion = document.querySelectorAll('.questions--');

const remBtn = document.querySelector('.rem-btn');
const addBtn = document.querySelector('.add-btn');

openQuestion.forEach(question => {
  const btn = question.querySelector('.question-anser-btn');
  btn.addEventListener('click', function () {
    openQuestion.forEach(item => {
      if (item !== question) {
        item.classList.remove('show-text');
      }
    });
    question.classList.toggle('show-text');
  });
});

// openQue.forEach(question => {
//   btns.addEventListener('click', function () {
//     openQue.forEach(que => {
//       if (que !== question) {
//         question.classList.remove('show-text');
//       }
//     });
//     question.classList.toggle('show-text');
//   });
// });

// traversing the dom
// const btn = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener('click', function (e) {
//     const question = e.currentTarget.parentElement.parentElement;

//     question.classList.toggle('show-text');
//   });
// });
