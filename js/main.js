// Skills 高亮逻辑
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

            // 把对应的 skill-tag 加上 highlight
            skillTags.forEach(tag => {
                const key = tag.getAttribute("data-skill");
                if (skillKeys.includes(key)) {
                    tag.classList.add("highlight");
                }
            });
        });

        card.addEventListener("mouseleave", () => {
            // 鼠标移走后，可以取消高亮，也可以选择保留最后一个
            clearHighlights();
        });
    });
});
