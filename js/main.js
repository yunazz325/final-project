// Skills highlight
document.addEventListener("DOMContentLoaded", () => {
    const skillTags = document.querySelectorAll(".skill-tag");
    const expCards  = document.querySelectorAll(".exp-card");

    function clearHighlights() {
        skillTags.forEach(tag => tag.classList.remove("highlight"));
    }

    expCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            const skillsStr = card.getAttribute("data-skills"); // "python,data,ml"
            if (!skillsStr) return;

            const skillKeys = skillsStr.split(",").map(s => s.trim());

            clearHighlights();

            skillTags.forEach(tag => {
                const key = tag.getAttribute("data-skill");
                if (skillKeys.includes(key)) {
                    tag.classList.add("highlight");
                }
            });
        });

        card.addEventListener("mouseleave", () => {
            clearHighlights();
        });
    });
});
