<style>
    * {
        font-family: 'Manrope', sans-serif;
        box-sizing: border-box;
        overflow: hidden;
        margin: 0 auto;
    }
    body {
        max-width: 50em;
    }

    .navBar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 1em;
    }
    .navList {
        font-weight: 100;
        display: flex;
        column-gap: 1rem;
        justify-content: space-between;
    }
    .navList li:hover{
        cursor: pointer;
        font-weight:300
    }
    hr.solid {
        margin-top: 1rem;
        border-top: 1px solid #bbb;
        color:#f1f1f1a4
    }
    .main {
        max-width: 45rem;
        padding: 1rem;
    }
    .tag {
        color:#f1f1f1a4
    }
    .intro {
        font-weight: 100;
        font-size: 15px;
        color: #ffffffe3
    }
</style>
<body>
    <div class="navBar">
        <div class="navLogo">
            <p>
                cameron mac
            </p>
        </div>
        <ul class="navList">
            <li>
                home 
            </li>
            <li>
                projects 
            </li>
            <li>
                blog 
            </li>
        </ul>
    </div>
    <hr class="solid">
    <div class="main">
        <h1>Hi, I'm Cameron <span style='font-size:50px;'>&#128075;</span></h1>
        <p class="tag">Software Engineer, Entrepreneur, Maker of Things.</p>
        <br>
        <p class="intro">
            I like to create things in my spare time. You are currently on my website developed using <strong>SvelteKit</strong> 
            and <strong>.NET C#</strong>. I'm well versed in other languages too, such as Python, Rust, Java, and SQL.
            <br>
            <br>
            In 2012 I wrote my first <strong>Hello World</strong> program, and in 2022 I obtained my <strong>B.S in Computer Science</strong>. 
            Software Engineering has always been a way for me to express my creativity, and push myself past my believed limits. 
            I have despised languages, loathed certain frameworks, but ultimately learned to love software development -- and <strong>I strive to create meaningful products that impact users in a positive way</strong>.
            <br>
            <br>
            Feel free to take a look around at my projects, or check out my blog!
        </p>
    </div>
</body>