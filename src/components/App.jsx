import { Component } from 'react';
import { FidbeckOptions } from './FidbeckOptions/FidbeckOptions';
import { Statistick } from './Statistick/Statistick';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedBack = event => {
    this.setState(prevState => {
      return {
        [event.target.name]: prevState[event.target.name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const add = this.state.good + this.state.neutral + this.state.bad;
    return add;
  };
  countPositiveFeedbackPercentage = () => {
    if (this.state.good) {
      const positiv = Math.round(
        this.state.good / (this.countTotalFeedback() / 100)
      );
      return positiv;
    }
  };
  render() {
    return (
      <div>
        <Section title={'Fidbeck options'}>
          <FidbeckOptions
            options={Object.keys(this.state)}
            addFeedBack={this.addFeedBack}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.countTotalFeedback() ? (
            <Statistick
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              totalFeedback={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </div>
    );
  }
}
