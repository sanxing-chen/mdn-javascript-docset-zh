<div>

<div class="notice experimental">

<span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"></span>**这是一个实验中的功能**  
此功能某些浏览器尚在开发中，请参考[浏览器兼容性表格](#Browser_compatibility)以得到在不同浏览器中适合使用的前缀。由于该功能对应的标准文档可能被重新修订，所以在未来版本的浏览器中该功能的语法和行为可能随之改变。

</div>

</div>

Atomics 对象以静态方法的形式提供原子操作。这些操作使用“ [`SharedArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/SharedArrayBuffer "此页面仍未被本地化, 期待您的翻译!")”对象。

Atomics操作由Atomics模块提供。与其他全局对象不同，Atomics 不是一个构造器。你不能使用new操作符来创建一个Atomics 对象，也不将Atomics当作一个函数来调用。所有的Atomics的属性和方法都是静态的（举例来说，就像 [`Math`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math "Math 是一个内置对象， 为数学常量和数学函数提供了属性和方法，而不是一个函数对象。")  对象一样）。

## Methods

### Atomic operations

当内存共享时，多线程可以读写同一内存数据。原子操作保证符合预见的数据的读写，即下一个操作会在上一个操作结束后开始，上一个操作不会被打断。

<dl>

<dt>[`Atomics.add()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Atomics/add "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>添加一个值到数组指定的位置。返回这个位置上的旧值。</dd>

<dd>[`Atomics.and()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Atomics/and "此页面仍未被本地化, 期待您的翻译!")</dd>

<dd>对数组指定位置上的值进行位与操作。返回这个位置上的旧值。</dd>

<dt>[`Atomics.compareExchange()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Atomics/compareExchange "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>将给定的值存储在数组中的指定位置，如果原有的值与给定的值相等，则返回原有的值</dd>

<dt>[`Atomics.exchange()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Atomics/exchange "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>存储给定值到数组指定位置。返回这个位置上的旧值。</dd>

</dl>

<dl>

<dt>[`Atomics.load()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Atomics/load "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>返回数组指定位置上的值</dd>

<dt>[`Atomics.or()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Atomics/or "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>对数组指定位置上的值进行位或操作。返回这个位置上的旧值。</dd>

<dt>[`Atomics.store()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Atomics/store "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>将给定值存在数组的指定位置。返回这个“给定值”。</dd>

<dt>[`Atomics.sub()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Atomics/sub "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>将数组指定位置上的值减去一个给定值。返回这个指定位置上的旧值。</dd>

<dt>[`Atomics.xor()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Atomics/xor "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>对数组指定位置上的值进行异或操作。返回这个位置上的旧值。</dd>

</dl>

### Wait and wake

linux futexes("快速用户空间互斥量")产生了wait(),wake()方法模式。wait/wake方式提供了使进程一直等待直到特定条件为真的方法。它的典型应用是在阻塞结构中。

<dl>

<dt>[`Atomics.wait()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Atomics/wait "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>检测数组给定位置上的值是否仍旧包含一个给定的值，并且保持挂起或者直到超时。返回"ok","not-equal","time-out"中的一个。如果wating在调用客户端不被允许，那么该方法会抛出一个异常（大多数浏览器不会允许在它们的主线程使用wait()）。</dd>

<dd>

[`Atomics.wake()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Atomics/wake "此页面仍未被本地化, 期待您的翻译!")

</dd>

<dd>唤醒等待队列中指定位置的客户端。返回被成功唤醒的客户端数量</dd>

<dt>[`Atomics.isLockFree(size)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Atomics/isLockFree "此页面仍未被本地化, 期待您的翻译!")</dt>

<dd>

用于决定对象是否可以使用 lock 或者 atomic 操作。如果数组可以在给定的大小上实现原子操作，返回 true。

</dd>

</dl>

## Specifications

<table class="standard-table">

<tbody>

<tr>

<th scope="col">Specification</th>

<th scope="col">Status</th>

<th scope="col">Comment</th>

</tr>

<tr>

<td>[ECMAScript Shared Memory and Atomics  
<small lang="zh-CN">Atomics</small>](http://tc39.github.io/ecmascript_sharedmem/shmem.html#AtomicsObject)</td>

<td><span class="spec-Draft">Draft</span></td>

<td>Initial definition.</td>

</tr>

</tbody>

</table>

## Browser compatibility

<div class="htab"><a name="AutoCompatibilityTable" id="AutoCompatibilityTable"></a>

*   <a>Desktop</a>
*   <a>Mobile</a>

</div>

<div id="compat-desktop">

<table class="compat-table">

<tbody>

<tr>

<th>Feature</th>

<th>Chrome</th>

<th>Edge</th>

<th>Firefox (Gecko)</th>

<th>Internet Explorer</th>

<th>Opera</th>

<th>Safari</th>

</tr>

<tr>

<td>Basic support</td>

<td><span style="color: #f00;">未实现</span> [2]</td>

<td><span style="color: #f00;">未实现</span></td>

<td>[46](/en-US/Firefox/Releases/46 "Released on 2016-04-26.") (46) [1] [3]</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

</tbody>

</table>

</div>

<div id="compat-mobile">

<table class="compat-table">

<tbody>

<tr>

<th>Feature</th>

<th>Android</th>

<th>Chrome for Android</th>

<th>Firefox Mobile (Gecko)</th>

<th>IE Mobile</th>

<th>Opera Mobile</th>

<th>Safari Mobile</th>

</tr>

<tr>

<td>Basic support</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td>46.0 (46) [1]</td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

<td><span style="color: #f00;">未实现</span></td>

</tr>

</tbody>

</table>

</div>

[1] 在默认设置中这个功能不可用. 可以在about:config 中设置 `javascript.options.shared_memory` 为 `true 以启用该功能`. 

[2] 这个功能的实现还在开发中，并且需要一些运行时 flags 的支持: `--js-flags=--harmony-sharedarraybuffer --enable-blink-feature=SharedArrayBuffer`

## Compatibility notes

[3]  Shared memory 的标准依然不变. 在 SpiderMonkey 48 (Firefox 48 / Thunderbird 48 / SeaMonkey 2.45)之前, 最后一个API 的名称和语意还没有实现完成. FirFox 46 版本和FireFox 48 版本之前的差别有:

*   `Atomics.futexWakeOrRequeue()` 方法和 `Atomics.fence()` 方法现在被完全移除 （bug(1259544)、bug(1225028)）
*   [`Atomics.wait()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Atomics/wait "此页面仍未被本地化, 期待您的翻译!") 方法和 [`Atomics.wake()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Atomics/wake "此页面仍未被本地化, 期待您的翻译!") 方法现在改名叫做 `Atomics.futexWait()` 和 `Atomics.futexWake()` ([bug 1260910](https://bugzilla.mozilla.org/show_bug.cgi?id=1260910 "FIXED: Rename Atomics.{futexWait,futexWake} as Atomics.{wait,wake}")). 注意: 之前的名称在 49版本之后将完全移除 ([bug 1262062](https://bugzilla.mozilla.org/show_bug.cgi?id=1262062 "FIXED: Remove futexWait and futexWake aliases after FF48 branches")).
*   属性 `Atomics.OK`, `Atomics.TIMEDOUT`, `Atomics.NOTEQUAL` 已经被移除. [`Atomics.wait()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Atomics/wait "此页面仍未被本地化, 期待您的翻译!") 方法现在返回字符串 "ok", "timed-out" 和"not-equal" ([bug 1260835](https://bugzilla.mozilla.org/show_bug.cgi?id=1260835 "FIXED: Remove Atomics.{OK,NOTEQUAL,TIMEDOUT}, return strings from Atomics.futexWait instead")).
*   [`Atomics.wake()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Atomics/wake "此页面仍未被本地化, 期待您的翻译!") 方法的 count 参数的默认值发生改变 : 现在的默认值为 `+Infinity`, 而不是 `0` ([bug 1253350](https://bugzilla.mozilla.org/show_bug.cgi?id=1253350 "FIXED: Shared memory spec change: futexWake / futexWakeOrRequeue "count" argument")).

## See also

*   [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer "ArrayBuffer （缓冲数组）是一种用于呈现通用、固定长度的二进制数据的类型。不能直接构造并填充 ArrayBuffer 的内容，而应该先创建一个 ArrayBufferView 对象，该对象用具体的格式来呈现 ArrayBuffer 的内容，你可以使用此对象来读写 ArrayBuffer 的内容。")
*   [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays)
*   [Web Workers](/en-US/docs/Web/API/Web_Workers_API)
*   [parlib-simple](https://github.com/lars-t-hansen/parlib-simple) – a simple library providing synchronization and work distribution abstractions.
*   [Shared Memory – a brief tutorial](https://github.com/tc39/ecmascript_sharedmem/blob/master/TUTORIAL.md)
*   [A Taste of JavaScript’s New Parallel Primitives – Mozilla Hacks](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/)