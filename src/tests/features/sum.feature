Feature: add two number
 
Scenario Outline: sum of two numbers
    Given I want o add twqo numbers
    When n1 is <number1>, n2 is <number2> and called add function
    Then I should be return <answer>

    Examples:
        | number1| number2 | answer|
        |   3    |    6    |   9   |
        |   2    |    6    |   8   |
        |   5    |    2    |   7   |