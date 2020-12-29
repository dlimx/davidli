declare module 'gatsby-plugin-mailchimp' {
  // eslint-disable-next-line no-inner-declarations
  function addToMailchimp(email: string): Promise<any> {}
  export = addToMailchimp;
}
