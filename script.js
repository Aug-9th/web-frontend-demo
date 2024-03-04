
const quizQuestions = [
  { type: 'trueFalse', question: "Trái Đất có hình cầu.", answer: true },
  { type: 'trueFalse', question: "Nước đáng sống nhất trên Trái Đất là sa mạc Sahara.", answer: false },
  { type: 'trueFalse', question: "Con người chỉ sử dụng được 10% bộ não của mình.", answer: false },
  { type: 'trueFalse', question: "Mặt Trời quay quanh Trái Đất.", answer: false },
  { type: 'trueFalse', question: "Nước Brazil là nước đứng thứ nhì về diện tích trên thế giới.", answer: true },
  { type: 'trueFalse', question: "Chuột có thể nhìn qua tường.", answer: false },
  { type: 'trueFalse', question: "Rome là thủ đô của Ý.", answer: true },
  { type: 'trueFalse', question: "Nước Nga có biên giới với Trung Quốc.", answer: true },
  { type: 'trueFalse', question: "Mặt Trăng không có bầu khí quyển.", answer: true },
  { type: 'trueFalse', question: "Sông Nile là sông dài nhất thế giới.", answer: false },

  { type: 'multipleChoice', question: "Ai là người sáng lập công ty Microsoft?", options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Elon Musk"], answer: "Bill Gates" },
  { type: 'multipleChoice', question: "Quốc gia nào nằm ở châu Âu nhưng không phải là thành viên của Liên minh châu Âu (EU)?", options: ["Thụy Điển", "Na Uy", "Thụy Sĩ", "Phần Lan"], answer: "Thụy Sĩ" },
  { type: 'multipleChoice', question: "Ai là tác giả của cuốn sách 'Alice's Adventures in Wonderland'?", options: ["Charles Dickens", "J.K. Rowling", "Lewis Carroll", "J.R.R. Tolkien"], answer: "Lewis Carroll" },
  { type: 'multipleChoice', question: "Ai là người đầu tiên đặt chân lên mặt trăng?", options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"], answer: "Neil Armstrong" },
  { type: 'multipleChoice', question: "Địa danh nào được biết đến là 'Thành phố không bao giờ ngủ'?", options: ["Las Vegas", "New York", "Paris", "Tokyo"], answer: "New York" },
  { type: 'multipleChoice', question: "Thủ đô của Australia là gì?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], answer: "Canberra" },
  { type: 'multipleChoice', question: "Tác phẩm 'Mona Lisa' được vẽ bởi nghệ sĩ nào?", options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"], answer: "Leonardo da Vinci" },
  { type: 'multipleChoice', question: "Nhân vật nào trong 'Star Wars' được biết đến với cái tên 'Người đàn ông đen'? ", options: ["Darth Vader", "Luke Skywalker", "Obi-Wan Kenobi", "Yoda"], answer: "Darth Vader" },
  { type: 'multipleChoice', question: "Thành phố nào được biết đến là 'Thủ đô vĩnh hằng'?", options: ["Rome", "Athens", "Jerusalem", "Constantinople"], answer: "Constantinople" },
  { type: 'multipleChoice', question: "Quốc gia nào là quốc gia lớn nhất thế giới về diện tích?", options: ["Nga", "Trung Quốc", "Canada", "Hoa Kỳ"], answer: "Nga" },

  { type:'multipleSelect', question: "Các hành tinh nào trong Hệ Mặt Trời là hành tinh khí?", options: ["Mars", "Venus", "Saturn", "Jupiter"], answer: ["Saturn", "Jupiter"] },
  { type:'multipleSelect', question: "Các châu lục nào trên Trái Đất?", options: ["Châu Âu", "Châu Phi", "Châu Á", "Châu Mỹ"], answer: ["Châu Âu", "Châu Phi", "Châu Á", "Châu Mỹ"] },
  { type:'multipleSelect', question: "Các ngôn ngữ lập trình nào là ngôn ngữ đa năng?", options: ["Python", "C++", "Java", "Ruby"], answer: ["Python", "Java"] },
  { type:'multipleSelect', question: "Các phần mềm nào dưới đây thuộc loại phần mềm văn phòng?", options: ["Microsoft Word", "Adobe Photoshop", "AutoCAD", "Visual Studio Code"], answer: ["Microsoft Word"] },
  { type:'multipleSelect', question: "Các môn học nào thuộc lĩnh vực khoa học xã hội?", options: ["Toán học", "Vật lý", "Lịch sử", "Hóa học"], answer: ["Lịch sử"] },
  { type:'multipleSelect', question: "Các môn học nào thuộc lĩnh vực khoa học tự nhiên?", options: ["Ngôn ngữ học", "Sinh học", "Khoa học máy tính", "Văn học"], answer: ["Sinh học", "Khoa học máy tính"] },
  { type:'multipleSelect', question: "Các loại loài nào sau đây thuộc loại động vật?", options: ["Cây cỏ", "Động vật có vú", "Nấm", "Vi khuẩn"], answer: ["Động vật có vú"] },
  { type:'multipleSelect', question: "Các quốc gia nào sau đây nằm ở châu Phi?", options: ["Brazil", "Nga", "Nam Phi", "Úc"], answer: ["Nam Phi"] },
  { type:'multipleSelect', question: "Các hành tinh có phương tiện giao thông nào sau đây?", options: ["Tàu vũ trụ", "Ô tô", "Tàu hỏa", "Máy bay"], answer: ["Tàu hỏa", "Máy bay"] },
  { type:'multipleSelect', question: "Các nguyên tố hóa học nào sau đây là khí?", options: ["Oxy", "Hydro", "Hidro", "Helium"], answer: ["Oxy", "Hydro", "Helium"] },

  { type:'essay', question: "Tại sao bạn muốn học lập trình?"},
  { type:'essay', question: "Nếu bạn có thể du lịch đến bất kỳ nơi nào trên thế giới, bạn sẽ đi đâu và tại sao?"},
  { type:'essay', question: "Tóm tắt về một cuốn sách bạn đã đọc gần đây."},
  { type:'essay', question: "Nêu ý nghĩa của việc giáo dục trong cuộc sống của con người."},
  { type:'essay', question: "Trình bày quan điểm của bạn về vấn đề biến đổi khí hậu và tác động của nó đối với tương lai của hành tinh chúng ta."},
  { type:'essay', question: "Bạn nghĩ gì về tầm quan trọng của việc duy trì một lối sống lành mạnh và hoạt động thể chất đều đặn?"},
  { type:'essay', question: "Nêu ý kiến của bạn về vai trò của công nghệ thông tin trong cuộc sống hiện đại."},
  { type:'essay', question: "Trình bày quan điểm của bạn về việc sử dụng trí tuệ nhân tạo trong tương lai."},
  { type:'essay', question: "Nếu bạn có thể thay đổi một điều gì đó trong thế giới này, bạn sẽ thay đổi điều gì và tại sao?"},
  ];
  
  let userAnswers = [];
  


  function savePersonInfo() {
    const fullName = document.getElementById('fullName').value;
    const dob = document.getElementById('dob').value;
    const personID = document.getElementById('personID').value;
    const personAddress = document.getElementById('personAddress').value;

    localStorage.setItem('fullName', fullName);
    localStorage.setItem('dob', dob);
    localStorage.setItem('personID', personID);
    localStorage.setItem('personAddress', personAddress);

  window.location.href = 'quiz.html';
}

  function startQuiz() {
    const personInfoForm = document.getElementById('personInfoForm');
    const quizContainer = document.getElementById('quizContainer');
  
    personInfoForm.classList.add('hidden');
    quizContainer.classList.remove('hidden');
  
    generateQuizQuestions();
  }
  

  function checkAnswers() {
    for (let i = 0; i < quizQuestions.length; i++) {
      const questionType = quizQuestions[i].type;
      const inputName = `q${i}`;

      if (questionType === 'trueFalse' || questionType === 'multipleChoice') {
        const selectedOption = document.querySelector(`input[name="${inputName}"]:checked`);
        if (!selectedOption) {
          alert(`Bạn chưa trả lời câu hỏi ${i + 1}`);
          return false; 
        }
      } else if (questionType === 'multipleSelect') {
        const selectedOptions = document.querySelectorAll(`input[name="${inputName}"]:checked`);
        if (selectedOptions.length === 0) {
          alert(`Bạn chưa trả lời câu hỏi ${i + 1}`);
          return false; 
        }
      } else if (questionType === 'essay') {
        const essayAnswer = document.querySelector(`textarea[name="${inputName}"]`);
        if (!essayAnswer.value.trim()) {
          alert(`Bạn chưa trả lời câu hỏi ${i + 1}`);
          return false; 
        }
      }
    }
  
    alert('Ấn OK để xác nhận nộp bài');
    return true;
  }

  function generateQuizQuestions() {
    const quizContainer = document.getElementById('quizContainer');
  
    quizContainer.innerHTML = '';
  
    for (let i = 0; i < quizQuestions.length; i++) {
      const questionElement = document.createElement('div');
      questionElement.innerHTML = `<p>${i + 1}. ${quizQuestions[i].question}</p>`;
  
      if (quizQuestions[i].type === 'trueFalse') {
        questionElement.innerHTML += `
          <label><input type="radio" name="q${i}" value="true"> Đúng</label>
          <label><input type="radio" name="q${i}" value="false"> Sai</label>
        `;
      } else if (quizQuestions[i].type === 'multipleChoice') {
        for (let j = 0; j < quizQuestions[i].options.length; j++) {
          questionElement.innerHTML += `
            <label><input type="radio" name="q${i}" value="${quizQuestions[i].options[j]}"> ${quizQuestions[i].options[j]}</label>
          `;
        }
      } else if (quizQuestions[i].type === 'multipleSelect') {
        for (let j = 0; j < quizQuestions[i].options.length; j++) {
          questionElement.innerHTML += `
            <label><input type="checkbox" name="q${i}" value="${quizQuestions[i].options[j]}"> ${quizQuestions[i].options[j]}</label>
          `;
        }
      } else if (quizQuestions[i].type === 'essay') {
        questionElement.innerHTML += `
          <textarea name="q${i}" rows="4" cols="50" placeholder="Nhập câu trả lời"></textarea>
        `;
      }
  
      quizContainer.appendChild(questionElement);
      var button = document.getElementById('showquiz');
      if (button) {
            button.style.display = 'none';
        }
      
    }
    var button = document.getElementById('showquiz');
      if (button) {
            button.style.display = 'none';
      }
      document.getElementById('submit').style.display = 'block';
  }
  
  function submitQuiz() {
    if(checkAnswers()){
      var correctCount = 0;
      var wrongCount = 0;
      const quizContainer = document.getElementById('quizContainer');
      const resultContainer = document.getElementById('resultContainer');
    
      userAnswers = [];
      for (let i = 0; i < quizQuestions.length; i++) {
        const questionType = quizQuestions[i].type;
        const answerElement = document.querySelector(`input[name="q${i}"]:checked, textarea[name="q${i}"]`);
    
        if (answerElement) {
          if (questionType === 'multipleSelect') {
            const selectedOptions = Array.from(document.querySelectorAll(`input[name="q${i}"]:checked`)).map(option => option.value);
            userAnswers.push({ question: i + 1, type: questionType, answer: selectedOptions });
          } else {
            userAnswers.push({ question: i + 1, type: questionType, answer: answerElement.value });
          }
        }
      }
    
      var correct_answer =["Answer Correct","Answer Wrong"];
      for (let i = 0; i < userAnswers.length; i++) {
        const randomIndex = Math.floor(Math.random() * correct_answer.length);
        var answer =correct_answer[randomIndex];
        if (answer === 'Answer Correct') {
          correctCount++;
        } else {
          wrongCount++;
        }
      }

      localStorage.setItem('correctCount', correctCount);
      localStorage.setItem('wrongCount', wrongCount);
      window.location.href = 'result.html';

    }
  }
  