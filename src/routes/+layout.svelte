<style>
    * {
        font-family: 'Manrope', sans-serif;
        box-sizing: border-box;
        overflow: hidden;
        margin: 0 auto;
        background: #131313;;
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

    .navLogo {
        color: #ffffffe3
    }
    .navList {
        font-weight: 100;
        display: flex;
        column-gap: 1rem;
        justify-content: space-between;
        text-decoration: none;
    }
    .navList a {
        outline: 0;
        color: #ffffffe3;
        text-decoration: none;
        color: #ffffffe3;
    }
    .navList li:hover{
        cursor: pointer;
        font-weight:300
    }
    hr {
        margin-top: 1em;
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
                <a href="/">home</a>
            </li>
            <li>
                <a href="/projects">projects</a> 
            </li>
            <li>
                <a href="/blog">blog</a>
            </li>
        </ul>
    </div>
    <hr>
</body>
<slot></slot>