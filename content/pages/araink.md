---
title: Careers
sections:
  - type: FeaturedItemsSection
    colors: colors-a
    title: Convinced? check out these open roles
    subtitle: ''
    items:
      - type: FeaturedItem
        title: Engineering
        text: >
          Head of eng


          **San Francisco**


          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          <div class="responsive-table">
          <table>
              <caption>Table with thead, tfoot, and tbody</caption>
            <thead>
              <tr>
                <th>Működj már</th>
                <th>Header content</th>
                <th>Header content</th>
                <th>Header content</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Body content</td>
                <td>Body content</td>
                <td>Body content</td>
                <td>Body content</td>
              </tr>
              <tr>
                <td>Body content</td>
                <td>Body content</td>
                <td>Body content</td>
                <td>Body content</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>Footer content</td>
                <td>Footer content</td>
            <td>Footer content</td>
            <td>Footer content</td>
              </tr>
            </tfoot>
          </table>
        </div>
        featuredImage: null
        styles:
          title:
            textAlign: left
          subtitle:
            textAlign: left
          text:
            textAlign: left
    columns: 1
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: center
  - type: ContactSection
    colors: colors-f
    title: Not seeing the right role? Contact us
    text: >-
      We might have more roles soon, and we’ll contact you if we think there
      might be a good match
    form:
      type: FormBlock
      elementId: contact-form
      action: /.netlify/functions/submission_created
      destination: ''
      fields:
        - type: TextFormControl
          name: name
          label: Name
          placeholder: Your name
          isRequired: 'true'
          width: 1/2
        - type: EmailFormControl
          name: email
          label: Email
          placeholder: Your email
          isRequired: 'true'
          width: 1/2
        - type: TextFormControl
          name: address
          label: Home address
          placeholder: Your home address
          isRequired: 'false'
          width: full
        - type: CheckboxFormControl
          name: updates
          label: Sign me up to receive updates
          isRequired: 'false'
          width: full
      submitLabel: Send Message
    media: null
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      text:
        textAlign: left
layout: PageLayout
---