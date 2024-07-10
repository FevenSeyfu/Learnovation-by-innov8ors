
export let markSectionComplete = (completedSections, setCompletedSections, sectionName) => {
    setCompletedSections([...completedSections, sectionName]);
};