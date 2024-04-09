class DateConverter {
    
    convertUnixToDate(unixTimestamp) {
        const date = new Date(unixTimestamp * 1000);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    convertDateToUnix(dateObject) {
        const year = dateObject.getFullYear();
        const month = dateObject.getMonth() + 1; // Month is zero-based, so add 1
        const day = dateObject.getDate();
        const unixTimestamp = new Date(year, month - 1, day).getTime() / 1000;
        return unixTimestamp;
    }
}

export const dateConverter = new DateConverter()
