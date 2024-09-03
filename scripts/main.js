const asabenehChallenges2020 = {
  description: 'Asabeneh Yetayeh challenges',
  challengeTitle: 'Asabeneh Yetayeh challenges',
  challengeSubtitle: '30DaysOfJavaScript Challenge',
  challengeYear: 2020,
  keywords: [
    'HTML',
    'HTML5',
    'CSS',
    'CSS3',
    'JS',
    'JavaScript',
    'ES6',
    'Promise',
    'async await',
    'Database',
    'React',
    'React Hooks',
    'Context API',
    'React Router',
    'Web Storage',
    'localStorage',
    'sessionStorage',
    'Redux',
    'Node',
    'MongoDB',
    'SQL',
    'API',
    'DOM',
    'data science',
    'MERN',
    'Python',
    'Flask',
    'Statistics',
    'Linear Algebra',
    'Numpy',
    'Pandas',
    'Scipy',
    'Scikit-learn',
    'Visualization',
    'D3.js'
  ],
  author: {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    titles: [
      ['🌱', 'Educator'],
      ['💻', 'Programmer'],
      ['🌐', 'Developer'],
      ['🔥', 'Motivator'],
      ['📔', 'Content Creator']
    ],
    qualifications : [
      ['📖',' MSc. Computer Science Ongoing'],
      ['🎓', 'BSc. Information and Communication Eng.'],
      ['🎓', 'MSc. Food Technology'],
      ['🎓', 'BSc. Food Technology']
    ],
    
    socialLinks: [
      {
        social: 'LinkedIn',
        url: 'https://www.linkedin.com/in/asabeneh/',
        fontawesomeIcon: '<i class="fab fa-linkedin fa-2x" ></i>'
      },
      {
        social: 'Twitter',
        url: 'https://twitter.com/Asabeneh',
        fontawesomeIcon: '<i class="fab fa-twitter-square fa-2x"></i>'
      },
      {
        social: 'Github',
        fontawesomeIcon: '<i class="fab fa-github-square fa-2x"></i>',
        url: 'https://github.com/Asabeneh'
      },
      {
        social: 'DEV.to',
        fontawesomeIcon: '<i class="fab fa-dev fa-2x"></i>',
        url: 'https://dev.to/asabeneh'
      }
    ],
    skills: [
      'Web Development',
      'Data Analysis',
      'Data Visualization',
      'Programming',
      'Databases',
      'Developing API'
    ],
    bio:
      'I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.'
  },
  challenges: [
    {
      name: '30 Days Of Python',
      topics: [
        'Python',
        'Flask',
        'Numpy',
        'Pandas',
        'Statistics',
        'API',
        'MongoDB'
      ],
      days: 30,
      status: 'Done',
      questions: 'Above 500',
      projects: 'Two',
      interviewQns: '',
      githubUrl: 'https://github.com/Asabeneh/30-Days-Of-Python'
    },
    {
      name: '30 Days Of JavaScript',
      topics: ['JavaScript', 'ES6', 'Promise', 'async and await', 'DOM'],
      days: 30,
      status: 'Ongoing',
      questions: 'Above 500',
      projects: 'About 30',
      interviewQns: '',
      githubUrl: 'https://github.com/Asabeneh/30DaysOfJavaScript'
    },
    {
      name: '30 Days Of HTML & CSS',
      topics: ['CSS', 'Flex', 'Grid', 'CSS Animation'],
      days: 30,
      status: 'Coming',
      questions: 'Above 500',
      projects: 'Two',
      interviewQns: '',
      githubUrl: ''
    },
    {
      name: '30 Days Of React',
      topics: [
        'React',
        'React Router',
        'Redux',
        'Context API',
        'React Hooks',
        'MERN'
      ],
      days: 30,
      status: 'Coming',
      questions: '',
      projects: '',
      interviewQns: '',
      githubUrl: ''
    },
    {
      name: '30 Days Of ReactNative',
      topics: ['ReactNative', 'Redux'],
      days: 30,
      status: 'Coming',
      questions: '',
      projects: 'Two',
      interviewQns: '',
      githubUrl: ''
    },
    {
      name: '30 Days Of Fullstack',
      topics: ['React', 'Redux', 'MongoDB', 'Node', 'MERN'],
      days: 30,
      status: 'Coming',
      questions: '',
      projects: '',
      interviewQns: '',
      githubUrl: ''
    },
    {
      name: '30 Days Of Data Analysis',
      topics: ['Python', 'Numpy', 'Pandas', 'Statistics', 'Visualization'],
      days: 30,
      status: 'Coming',
      questions: '',
      projects: '',
      interviewQns: '',
      githubUrl: ''
    },
    {
      name: '30 Days Of Machine Learning',
      topics: [
        'Python',
        'Numpy',
        'Pandas',
        'Scikit-learn',
        'Scipy',
        'Linear Algebra',
        'Statistics',
        'Visualization'
      ],
      days: 30,
      status: 'Coming',
      questions: '',
      projects: '',
      interviewQns: '',
      githubUrl: ''
    }
  ]
}



function renderChallenges() {
  const { challengeTitle, challengeSubtitle, challengeYear, author, challenges, keywords } = asabenehChallenges2020;
  document.getElementById('challenge-title').innerHTML = `${challengeTitle} in <span id="challenge-year">${challengeYear}</span>`;
  document.getElementById('challenge-subtitle').textContent = challengeSubtitle;

  const yearTimeDiv = document.getElementById('year-time');
  const now = new Date();
  yearTimeDiv.innerHTML = `<span>${now.toDateString()} ${now.toLocaleTimeString()}</span>`;

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  setInterval(() => {
    document.querySelector("h1 span").style.color = getRandomColor();
    yearTimeDiv.style.background = getRandomColor();
  }, 1000);

  const challengesDiv = document.getElementById('challenges');
  challenges.forEach((challenge, index) => {
    const div = document.createElement('div');
    div.className = `challenge-item ${challenge.status.toLowerCase()}`;

    const challengeName = document.createElement("span");
    challengeName.textContent = `${challenge.name}`;

    // Apply the purple color and underline to the first and second challenges
    if (index === 0 || index === 1) {
      challengeName.style.color = "purple";
      challengeName.style.textDecoration = "underline";
    }

    const dropTopics = document.createElement('div');
    dropTopics.classList.add("drop_topics");

    // Create the main span with arrow and first topic
    const mainSpan = document.createElement('div');
    mainSpan.classList.add("main_span");

    // Create the dropdown container for remaining topics
    const dropdownDiv = document.createElement('div');
    dropdownDiv.className = 'dropdown-content';
    dropdownDiv.style.display = 'none';

    // Append remaining topics to dropdownDiv
    challenge.topics.slice(1).forEach(topic => {
      const topicDiv = document.createElement('div');
      topicDiv.className = 'dropdown-item';
      topicDiv.textContent = topic;
      dropdownDiv.appendChild(topicDiv);
    });

    mainSpan.innerHTML = `
      <span class="arrow">▶</span>
      <div class="topics">${challenge.topics[0]}</div>
    `;

    // Toggle dropdown visibility on click
    mainSpan.addEventListener('click', () => {
      const arrow = mainSpan.querySelector('.arrow');
      if (dropdownDiv.style.display === 'none') {
        dropdownDiv.style.display = 'block';
        arrow.innerHTML = '▼';  // Change arrow direction
      } else {
        dropdownDiv.style.display = 'none';
        arrow.innerHTML = '▶';  // Reset arrow direction
      }
    });

    dropTopics.appendChild(mainSpan);
    dropTopics.appendChild(dropdownDiv);

    const challengeStatus = document.createElement('span');
    challengeStatus.textContent = challenge.status;

    // Append the challenge name, drop topics, and challenge status to the challenge div
    div.appendChild(challengeName);
    div.appendChild(dropTopics);
    div.appendChild(challengeStatus);

    // Finally, append the challenge div to the challengesDiv
    challengesDiv.appendChild(div);
  });




  const authorInfoDiv = document.getElementById('author-info');

  authorInfoDiv.innerHTML = `
    <h3>${author.firstName} ${author.lastName}</h3>
    <div class = "social_icons">
      ${author.socialLinks.map(link => {
        let icon = link.fontawesomeIcon;
        if (!icon) return '';  // Handle case where icon is empty
        return `<a href="${link.url}" target="_blank">${icon}</a>`;
      }).join(' ')}
    </div>
    <p>${author.bio}</p>
    <div style="display: flex; justify-content: space-between;">
      <div>
        <h4>Titles</h4>
        ${author.titles.map(([emoji, title]) => `<div id= "title_space">${emoji} ${title}</div>`).join('')}
      </div>
      <div>
        <h4>Skills</h4>
        ${author.skills.map(skill => `<div style="display: flex; align-items: center;" class="skill"><span style="background: green; color: white;" class="icon">&#x2714;</span> ${skill}</div>`).join('')}
      </div>
      <div>
        <h4>Qualifications</h4>
        ${author.qualifications.map(([emoji, qualification]) => `<div id = 'qua_space'>${emoji} ${qualification}</div>`).join('')}
      </div>
    </div>
    <div>
      <h4>Keywords</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 5px;">
        ${keywords.map(keyword => `<span style="background-color: #${Math.floor(Math.random()*16777215).toString(16)}; padding: 5px 10px; border-radius: 5px; color: white;"># ${keyword}</span>`).join('')}
      </div>
    </div>
  `;
  


}
document.addEventListener('DOMContentLoaded', renderChallenges);

