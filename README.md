<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Lokesh Varma Jampana</title>
  <style>
    body {
      margin: 0;
      padding: 20px;
      background-color: #0d0d0d;
      color: #ffffff;
      font-family: 'Poppins', sans-serif;
    }

    /* Rocket Float and Rotate Animation */
    @keyframes floatRotate {
      0% { transform: translateY(0px) rotate(0deg); }
      25% { transform: translateY(-8px) rotate(-10deg); }
      50% { transform: translateY(0px) rotate(0deg); }
      75% { transform: translateY(8px) rotate(10deg); }
      100% { transform: translateY(0px) rotate(0deg); }
    }

    .header {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 2rem;
      font-weight: 600;
    }

    .rocket {
      width: 40px;
      animation: floatRotate 3s ease-in-out infinite;
    }

    /* Toolbox Section */
    .toolbox {
      margin-top: 30px;
      font-size: 1rem;
      color: #b3b3b3;
      line-height: 1.8;
    }

    /* Social Links */
    .social-links {
      margin-top: 30px;
      display: flex;
      gap: 15px;
    }
    .social-links a {
      text-decoration: none;
      color: #00bfff;
      font-weight: 500;
      transition: color 0.3s;
    }
    .social-links a:hover {
      color: #1affff;
    }

    /* Most Used Languages Section */
    .languages-section {
      margin-top: 50px;
      text-align: center;
    }

    .languages-title {
      font-size: 1.8rem;
      margin-bottom: 20px;
      color: #00ffff;
    }

    .languages-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 40px;
    }

    .language-circle {
      position: relative;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: conic-gradient(#00bfff var(--percentage), #222 var(--percentage));
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      color: #ffffff;
      box-shadow: 0 0 15px #00bfff88;
      transition: transform 0.3s;
    }

    .language-circle:hover {
      transform: scale(1.1);
    }

    .language-label {
      position: absolute;
      bottom: -30px;
      width: 100%;
      text-align: center;
      font-size: 1rem;
      color: #b3b3b3;
    }
  </style>
</head>

<body>

  <!-- Name and Rocket -->
  <div class="header">
    <h1>Hi, I'm Lokesh Varma Jampana</h1>
    <img src="/path-to-your-rocket.png" alt="Rocket" class="rocket">
  </div>

  <!-- Toolbox (Skills) -->
  <div class="toolbox">
    Python, R, Java, SQL, JavaScript, TensorFlow, PyTorch, Keras, Power BI, NumPy, Pandas, scikit-learn, OpenCV, HuggingFace, FastAPI, Jupyter, VS Code, Git, Google Cloud, AWS, Power Query, Supabase, Machine Learning, Generative AI, LLMs, Transformers, NLP, CNNs, RNNs, Data Visualization, MySQL, MongoDB, Cloud DBs
  </div>

  <!-- Social Links -->
  <div class="social-links">
    <a href="https://x.com/LokeshvarmaJ" target="_blank">X (Twitter)</a>
    <a href="https://medium.com/@lokeshvarmaj" target="_blank">Medium</a>
    <a href="https://www.instagram.com/lokeshvarmaj/" target="_blank">Instagram</a>
  </div>

  <!-- Most Used Languages -->
  <div class="languages-section">
    <div class="languages-title">My Most Used Languages 🔥</div>
    <div class="languages-grid">
      <div class="language-circle" style="--percentage: 86%;">
        86%
        <div class="language-label">TypeScript</div>
      </div>
      <div class="language-circle" style="--percentage: 5%;">
        5%
        <div class="language-label">Solidity</div>
      </div>
      <div class="language-circle" style="--percentage: 4.5%;">
        4.5%
        <div class="language-label">JavaScript</div>
      </div>
      <div class="language-circle" style="--percentage: 2.1%;">
        2.1%
        <div class="language-label">CSS</div>
      </div>
      <div class="language-circle" style="--percentage: 1.3%;">
        1.3%
        <div class="language-label">HTML</div>
      </div>
      <div class="language-circle" style="--percentage: 1%;">
        1%
        <div class="language-label">SCSS</div>
      </div>
    </div>
  </div>

</body>
</html>
