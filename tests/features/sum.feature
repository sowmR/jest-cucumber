Feature: featureName
@tc:28192
@us:1283
Scenario Outline: scenario1
    Given I want o add two numbers
    When n1 is <number1>, n2 is <number2> and called add function
    Then I should be return <answer>

    Examples:
        | number1| number2 | answer|
        |   3    |    6    |   9   |
        |   2    |    6    |   8   |
        |   5    |    2    |   7   |

@tc:28193
@us:1283
Scenario: scenario2
    Given I have two numbers
    When when add function is called with 2 and 3
    Then I should be return 5