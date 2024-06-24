<script>
    $(document).ready(function() {
    const slides = $("#js-slide").find("img");
    const slideLength = slides.length;

    let now = 0;
    let next = 1;

        const fadeDuration = 1500;
        const showDuration = 3000;

        slides.hide();
        slides.eq(0).show().addClass("zoom");

        const slideShow = () => {
            slides.eq(now % slideLength).fadeOut(fadeDuration).removeClass("zoom");
            slides.eq(next % slideLength).fadeIn(fadeDuration).addClass("zoom");

            now++;
            next++;
        };

        setInterval(slideShow, showDuration);
    });
</script>