import React from 'react';
import Caseitem from '../CaseItem';


class TwoCasesTemplate extends React.Component {
  render() {
    return (
      this.props.cases && (
        <article className="case-item-wrapper">
          {this.props.cases.map(item => {
            return (
              <Caseitem
                image={item.image}
                client_name={item.client_name}
                case_introduction={item.case_introduction}
                url={item.url}
              />
            );
          })}
        </article>
      )
    );
  }
}
export default TwoCasesTemplate;
