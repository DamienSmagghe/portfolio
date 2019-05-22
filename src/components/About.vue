<template>
    <div class="about">
        <main class="wrapped">
            <h2>Damien Smagghe ?</h2>
            <div class="about__blocks">
                <div class="abilities">
                    <h3>Main abilities</h3>
                    <ul>
                        <li>
                            <p><span>Web stack :</span> HTML5, CSS, Modern Javascript (es6+), PHP.</p>
                        </li>
                        <li>
                            <p><span>Vue.js :</span> This is my main framework that i enjoy working with in Javascript.</p>
                        </li>
                        <li>
                            <p><span>Anime.js | D3.js | Chart.js :</span> The librairies I use the most in Javascript.</p>
                        </li>
                        <li>
                            <p><span>French | English :</span> French is my native language and I learned English by travelling and watching Netflix.</p>
                        </li>
                        <li>
                            <p><span>Useful :</span> I know how to design interface with sketch and work agile with Trello, Slack and Notion. I also know SEO optimisation and I have a sensibility to UX & UI design.</p>
                        </li>
                    </ul>
                </div>
                <div class="passions">
                    <h3>Passions and personnality</h3>
                    <ul>
                        <li>
                            <p>
                                I attach great importance to <span>relationships</span>. I try to make communication as efficient as possible. it helps me in my work because i easily communicate with me collaborators. It really is an important thing when working in remote freelancing. I <span>communicate</span> to offer the solution my clients needs.
                            </p>
                        </li>
                        <li>
                            <p>
                                I am also passionate about sports ( <span>Thai boxing, diving, sailing</span> ) and the AI/data environment. If you want to talk muay-thay or AI/data do not hesitate to <span>leave a message</span> ! I’d really love to work into a company or an agency that deals with sport companies.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="about__resume">
                <a class='animated-arrow' href='../../static/cv.pdf' download>
                <span class='the-arrow -left'>
                        <span class='shaft'></span>
                </span>
                <span class='main'>
                  <span class='text'>Download my resume</span>
                <span class='the-arrow -right'>
                    <span class='shaft'></span>
                </span>
                </span>
            </a>
            </div>
            
        </main>
        <app-footer></app-footer>
    </div>
</template>
<script>
import Footer from './core/Footer'
export default {
    name: 'about',
    components: {
        'app-footer': Footer
    }
}
</script>
<style>
.about {
    min-height: 75vh;
}
 .about h2 {
     font-size: 2.5rem;
     font-family: Playfair;
     font-weight: bold;
     margin-bottom: 2rem;
 }
 .about .about__blocks {
     display: flex;
     justify-content: space-between;
 }
 .about .abilities, .about .passions {
     width: 44%;
 }
 .about .about__blocks h3 {
     font-family: Playfair;
     font-weight: bold;
     color: #1C23F5;
     font-size: 1.5rem;
     margin-bottom: 2rem;
 }
 .about .about__blocks li {
     margin-bottom: 1rem;
 }
 .about .about__blocks p {
     font-size: 0.8rem;
     line-height: 1.5;
     letter-spacing: 0.02rem;
 }
 .about .about__blocks p span {
     color: #1C23F5;
     font-weight: bold;
 }
 .about__resume {
     margin: 1rem 0 4rem 0;
 }
 @media screen and (max-width: 1040px) {
     .about .about__blocks {
         flex-direction: column;
     }
      .about .abilities, .about .passions {
        width: 100%;
        margin-bottom: 3rem;
 }
 }
</style>


