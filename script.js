function beforeSubmit()
{
    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");

    console.log('Input Date', inputdate.value);

    //Convert the date from string to date

    let formattedDate = new Date(inputdate).toLocaleDateString("en-IN");
    outputdate.value = formattedDate;
}