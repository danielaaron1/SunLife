// Add interactivity to the timeline if needed
// Example: Highlight timeline item on hover
document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('bg-warning-subtle');
    });
    item.addEventListener('mouseleave', () => {
        item.classList.remove('bg-warning-subtle');
    });
});
