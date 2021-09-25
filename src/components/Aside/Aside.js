import React from 'react';

const Aside = (props) => {
    const { aside } = props;
    return (
      <div>
        <h4>Clicked Meal</h4>
            {
                aside.map(item => <p key={1}><ul><li>{item}</li></ul></p>)
        }
      </div>
    );
};

export default Aside;