export default function jobToSlug(title, location) {
  if (!title || !location) {
    return "";
  }

  return (title + " in " + location).toLowerCase().replace(/ /gi, "-");
}
