<ul class="breadcrumb">
	<li><a href="/admin">HOME</a></li>
	@for($i = 2; $i <= count(Request::segments()); $i++)
	<li>
		<a href="{{URL::to(implode('/',array_slice(Request::segments(),0,$i,true)))}}">
			{{strtoupper(Request::segment($i))}}
		</a>
	</li>
	@endfor
</ul>