---
title: "기본 문서 양식 / 서식"
excerpt: ""
permalink: _/data/navigation.yml url 정보
redirect_from:
  - /theme-setup/
toc: false
toc_sticky: false
---

----
#### Description
#### 요약 또는 참고 링크

----
### 부제

#### 부제의 목차

----
### 부제

  * 부제의 구분은 수평선 으로 구분 한다.

#### 1. 부제의 목차

  * 설명

#### 2. 부제의 목차

  * 설명

    * **1.** list 설명

    * **2.** list 설명

----
### 3. 코드 블럭 표현식

#### 코드 블럭 사용법

* 코드 블럭 표현식은 해당 CSS가 지원 되야 한다.

```js
javascript 코드 블럭
```

```text
text 코드 블럭
```

#### 코드 블럭에 특수 구문 사용 하기.

* 중괄호 사용

{% highlight liquid linenos%}
{% raw %}
<div style={{ color: "red" }} />
<Hello style={{ color: "red" }} />
const styles = { color: "red" };
<div style={styles} />
{% endraw %}
{% endhighlight %}

*  Simple Highlight
{% highlight ruby %}
def foo
puts 'foo'
end
{% endhighlight %}

* Highlight with long lines
{% highlight c# %}
public class Hello {
public static void Main() {
Console.WriteLine("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
}
}
{% endhighlight %}

* Highlight with line numbers and long lines
{% highlight javascript linenos=table %}
function myFunction() {
alert("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
}
{% endhighlight %}