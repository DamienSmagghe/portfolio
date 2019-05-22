<template>
    <footer>
        <div class="wrapped">
            <p>
                I’m currently looking for <strong>6 month internship</strong> between June and December 2020 and <strong>freelancing missions</strong>. If you are interested feel free to contact me on every social media and see my work : <br>
                <a href="https://github.com/DamienSmagghe" target="blank" title="Damien Smagghe's Github page">Github</a>,
                <a href="https://www.linkedin.com/in/damien-smagghe-2a226a171/" target="blank" title="Link to Damien Smagghe's Linkedin">Linkedin</a>,
                <a href="https://www.malt.fr/profile/damiensmagghe" target="blank" title="Damien Smagghe's malt profile">Malt</a>,
                <a href="https://codepen.io/DamienSmg/" target="blank" title="Damien Smagghe's Codepen link">Codepen</a> or
                <a href="mailto:damien.smagghe@hotmail.fr" title="Mail Damien Smagghe">contact me</a> directly.
            </p>
        </div>
    
    </footer>
</template>

<script>
    export default {
        name: 'footer'
    }
</script>

<style>
    footer {
        background: #EFEFEF;
        padding: 2rem 0;
        font-size: 0.8rem;
    }
    
    footer p {
        width: 50%;
        line-height: 1.5;
    }
    
    footer p strong {
        font-weight: bold;
        color: #1C23F5;
    }
    
    footer p a {
        position: relative;
        display: inline-block;
        padding: 0 2px;
        color: #1C23F5;
        transition: color .25s cubic-bezier(.19, 1, .22, 1);
        border-bottom: 0;
        white-space: nowrap;
        z-index: 5;
    }
    footer p a:hover {
        color: white;
    }
    footer p a:hover::before {
        transform: scaleY(1);
    }
    
    footer p a::before {
        content: "";
        position: absolute;
        bottom: 2px;
        left: 0;
        width: 100%;
        height: 0.85rem;
        background: #1C23F5;
        will-change: transform;
        transform-origin: bottom;
        transform: scaleY(0.03);
        border: none;
        transition: 0.25s ease-out;
        z-index: -1;
    }
    @media screen and (max-width: 1040px) {
        footer p {
        width: 100%;
    }
    }
</style>

