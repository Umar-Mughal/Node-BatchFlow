export const downloadFormDataToTxt = ({ formData, fileName }) => {
  const formDataKeys = Object.keys(formData).join(",");
  const formDataValues = Object.values(formData).join(",");

  let pom = document.createElement("a");

  pom.setAttribute(
    "href",
    `data:text/plain;charset=utf-8,${formDataKeys}\n${formDataValues}`
  );

  pom.setAttribute("download", fileName);
  pom.style.display = "none";
  document.body.appendChild(pom);
  pom.click();
  document.body.removeChild(pom);
};
