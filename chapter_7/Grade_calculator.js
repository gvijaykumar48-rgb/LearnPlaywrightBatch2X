// ### Question 2 — Student Grade Calculator
// Problem: Take marks (0–100) and print the grade based on these rules:
// - 90 and above → A
// - 80–89 → B
// - 70–79 → C
// - 60–69 → D
// - Below 60 → Fail

let m=40;
if(m>=90)
{
    console.log("Grade: A");
}
else if(m>=80 & m <=89)
{
    console.log("Grade :B")
}
else if(m>=70 & m <=79)
{
    console.log("Grade :C")
}
else if(m>=60 & m <=69)
{
    console.log("Grade :D")
}
else 
{
    console.log("F-Fail")
}