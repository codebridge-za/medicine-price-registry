import React from 'react';

const createDetailsPanel = (props) => {
  const {
    sep: price,
    cost_per_unit: costPerUnit,
    dosage_form: dosageForm,
    dispensing_fee: dispensingFee,
    schedule,
    pack_size: packSize,
    num_packs: numPacks,
    is_generic: isGeneric,
    ingredients,
    name,
    nappi_code: nappiCode,
    regno,
  } = props;

  return (
    <div key={nappiCode}>
      <div>
        <div>
          <div>Product details</div>
          <ul>
            <li>
              <div>Max price (incl VAT and fees):</div>
              <div>{price}</div>
            </li>
            <li>
              <div>Cost per unit:</div>
              <div>{costPerUnit}/{dosageForm}</div>
            </li>
            <li>
              <div>Dispensing Fee:</div>
              <div>{dispensingFee}</div>
            </li>
            <li>
              <div>Schedule:</div>
              <div>{schedule}</div>
            </li>
            <li>
              <div>Dosage Form:</div>
              <div>{dosageForm}</div>
            </li>
            <li>
              <div>Tablets/ml/Doses:</div>
              <div>{packSize}</div>
            </li>
            <li>
              <div>Number of packs:</div>
              <div>{numPacks}</div>
            </li>
            <li>
              <div>Generic/Innovator:</div>
              <div>{isGeneric}</div>
            </li>
          </ul>
        </div>
        <div>
          <div>Ingredients</div>
        </div>
      </div>
      <div>Registration number: {regno}</div>
    </div>
  );
};

const DetailsPanel = ({ details }) => (
  details.map(createDetailsPanel)
);

export default DetailsPanel;
