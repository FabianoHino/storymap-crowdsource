import builderText from 'i18n!translations/builder/nls/template';

export const featureServiceDefaults = {
  basic: {
    fieldSettings: {
      PrimaryPhoto: {
        required: true,
        type: 'photo',
        fieldID: 'PrimaryPhoto',
        label: builderText.contribute.defaultForm.photo.label,
        placeholder: builderText.contribute.defaultForm.photo.placeholder,
        attributeName: builderText.contribute.defaultForm.photo.attribute,
        validations: [],
        isAttachment: true,
        extras: {
          dataType: 'photo',
          minimumSize: 700,
          photoSettings: [{
            name: 'PrimaryPhoto',
            smallestSide: 1000
          },{
            name: 'PrimaryThumbnail',
            height: 200,
            width: 200
          }]
        }
      },
      Name: {
        required: true,
        type: 'text',
        fieldID: 'Name',
        label: builderText.contribute.defaultForm.name.label,
        attributeName: builderText.contribute.defaultForm.name.attribute,
        placeholder: builderText.contribute.defaultForm.name.placeholder,
        validations: ['arcgisSupportedHtml']
      },
      Username: {
        required: true,
        type: 'text',
        fieldID: 'Username',
        label: builderText.contribute.defaultForm.username.label,
        attributeName: builderText.contribute.defaultForm.username.attribute,
        placeholder: builderText.contribute.defaultForm.username.placeholder,
        validations: ['arcgisSupportedHtml']
      },
      Data: {
        required: true,
        type: 'date',
        fieldID: 'Data',
        label: builderText.contribute.defaultForm.data.label,
        attributeName: builderText.contribute.defaultForm.data.attribute,
        placeholder: builderText.contribute.defaultForm.data.placeholder,
        validations: ['arcgisSupportedHtml']
      },
      LocationName: {
        required: true,
        type: 'location',
        fieldID: 'LocationName',
        label: builderText.contribute.defaultForm.location.label,
        attributeName: builderText.contribute.defaultForm.location.attribute,
        placeholder: builderText.contribute.defaultForm.location.placeholder,
        validations: [],
        extras: {
          dataType: 'location',
          storeGeometry: true
        }
      },
      Description: {
        required: true,
        type: 'textarea',
        fieldID: 'Description',
        label: builderText.contribute.defaultForm.description.label,
        attributeName: builderText.contribute.defaultForm.description.attribute,
        placeholder: builderText.contribute.defaultForm.description.placeholder,
        validations: ['arcgisSupportedHtml']
      }
    }
  }
};

export default {
  featureServiceDefaults
};
