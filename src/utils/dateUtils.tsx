export const dateBuilder = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let d = new Date();
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}

export const getNextFiveDays = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const next5Days = [];
    for (let i = 0; i < 7; i++) {
      next5Days.push(days[new Date(Date.now() + (i + 1) * 24 * 60 * 60 * 1000).getDay()]);
    }
    return next5Days;
}