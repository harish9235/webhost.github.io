/*You can get the name attribute of the radio which is clicked and depending on this we will loop through all the radio button with that name and disable radio button which are not checked.*/
document.querySelectorAll("input[type=radio]").forEach(function (el) {
    el.addEventListener('click', function () {
      //getting name attribute if radio which is clicked
      var name = el.getAttribute('name');
      //loop only through those radio where name is same.
      document.querySelectorAll('input[name="' + name + '"]').forEach(function (el) {
        if (el.matches(":not(:checked)")) {
          el.setAttribute('disabled', 'disabled');
        }
      });
    });
  });
          const quiz=document.getElementById('frm');
          const resultD=document.getElementById('result');
          const correctAns=['a', 'b', 'c', 'd', 'd'];
  
          quiz.addEventListener('submit', e =>{
              e.preventDefault();
              let score=0;
              const answerValues=[quiz.q1.value,quiz.q2.value,quiz.q3.value,quiz.q4.value,quiz.q5.value];
  
              answerValues.forEach((answer, index) =>{
                  if (answer === correctAns[index]) {
                      score+=1;
                  }
              });
              resultD.innerHTML=`Out of ${correctAns.length} Questions ${score} Answers are Correct`;
          });