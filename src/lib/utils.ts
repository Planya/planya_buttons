function toggleClass(selector: string, className: string): void {
  const element: HTMLElement = document.querySelector(selector) as HTMLElement

  if (element.classList) {
    element.classList.toggle(className)
  } else {
    const classes = element.className.split(" ")
    const i = classes.indexOf(className)
  
    if (i >= 0)
      classes.splice(i, 1)
    else
      classes.push(className)
      element.className = classes.join(" ")
  }
}

export default {
  toggleClass
}