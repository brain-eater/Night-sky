// Compiled by ClojureScript 1.10.520 {}
goog.provide('first.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
first.core.moon_pos = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(50),new cljs.core.Keyword(null,"y","y",-1757859776),(50)], null);
first.core.sketch_size = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null);
first.core.image_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Full_Moon_Luc_Viatour.jpg/1187px-Full_Moon_Luc_Viatour.jpg";
first.core.get_random_non_moon_pos = (function first$core$get_random_non_moon_pos(){
var x = cljs.core.rand_nth.call(null,cljs.core.range.call(null,(0),cljs.core.first.call(null,first.core.sketch_size),(50)));
var y = cljs.core.rand_nth.call(null,cljs.core.range.call(null,(0),cljs.core.second.call(null,first.core.sketch_size),(50)));
while(true){
if((((x < (160))) && ((y < (160))))){
var G__19783 = cljs.core.rand_nth.call(null,cljs.core.range.call(null,(0),(500),(50)));
var G__19784 = cljs.core.rand_nth.call(null,cljs.core.range.call(null,(0),(500),(50)));
x = G__19783;
y = G__19784;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
}
break;
}
});
first.core.get_random_star = (function first$core$get_random_star(x){
var pos = first.core.get_random_non_moon_pos.call(null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.first.call(null,pos),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.second.call(null,pos),new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.rand_nth.call(null,cljs.core.range.call(null,(2),(3)))], null);
});
first.core.glow_star = (function first$core$glow_star(star){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"star","star",279424429),star,new cljs.core.Keyword(null,"line-size","line-size",8517417),0.1,new cljs.core.Keyword(null,"reached-max-size","reached-max-size",-2001891468),false], null);
});
first.core.setup = (function first$core$setup(){
quil.core.frame_rate.call(null,(40));

quil.core.fill.call(null,(240),(240),(240));

var stars = cljs.core.map.call(null,first.core.get_random_star,cljs.core.range.call(null,(50)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"moon","moon",-1802945312),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"img","img",1442687358),quil.core.load_image.call(null,first.core.image_url),new cljs.core.Keyword(null,"pos","pos",-864607220),first.core.moon_pos], null),new cljs.core.Keyword(null,"stars","stars",-556837771),stars,new cljs.core.Keyword(null,"next-glow-stars-info","next-glow-stars-info",213102936),cljs.core.map.call(null,first.core.glow_star,cljs.core.take.call(null,(20),stars))], null);
});
first.core.next_glow_star_info = (function first$core$next_glow_star_info(glow_star_info,stars){
var map__19785 = new cljs.core.Keyword(null,"star","star",279424429).cljs$core$IFn$_invoke$arity$1(glow_star_info);
var map__19785__$1 = (((((!((map__19785 == null))))?(((((map__19785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19785):map__19785);
var x = cljs.core.get.call(null,map__19785__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__19785__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size = cljs.core.get.call(null,map__19785__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__19786 = glow_star_info;
var map__19786__$1 = (((((!((map__19786 == null))))?(((((map__19786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19786):map__19786);
var line_size = cljs.core.get.call(null,map__19786__$1,new cljs.core.Keyword(null,"line-size","line-size",8517417));
if((line_size < (0))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"star","star",279424429),cljs.core.rand_nth.call(null,stars),new cljs.core.Keyword(null,"line-size","line-size",8517417),0.1,new cljs.core.Keyword(null,"reached-max-size","reached-max-size",-2001891468),false], null);
} else {
if(((2.5 * size) < new cljs.core.Keyword(null,"line-size","line-size",8517417).cljs$core$IFn$_invoke$arity$1(glow_star_info))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"star","star",279424429),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"size","size",1098693007),size], null),new cljs.core.Keyword(null,"line-size","line-size",8517417),(line_size - 0.5),new cljs.core.Keyword(null,"reached-max-size","reached-max-size",-2001891468),true], null);
} else {
if(new cljs.core.Keyword(null,"reached-max-size","reached-max-size",-2001891468).cljs$core$IFn$_invoke$arity$1(glow_star_info) === false){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"star","star",279424429),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"size","size",1098693007),size], null),new cljs.core.Keyword(null,"line-size","line-size",8517417),(0.5 + line_size),new cljs.core.Keyword(null,"reached-max-size","reached-max-size",-2001891468),false], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"star","star",279424429),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"size","size",1098693007),size], null),new cljs.core.Keyword(null,"line-size","line-size",8517417),(line_size - 0.5),new cljs.core.Keyword(null,"reached-max-size","reached-max-size",-2001891468),true], null);

}
}
}
});
first.core.update_state = (function first$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"moon","moon",-1802945312),new cljs.core.Keyword(null,"moon","moon",-1802945312).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"stars","stars",-556837771),new cljs.core.Keyword(null,"stars","stars",-556837771).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"next-glow-stars-info","next-glow-stars-info",213102936),cljs.core.map.call(null,(function (p1__19789_SHARP_){
return first.core.next_glow_star_info.call(null,p1__19789_SHARP_,new cljs.core.Keyword(null,"stars","stars",-556837771).cljs$core$IFn$_invoke$arity$1(state));
}),new cljs.core.Keyword(null,"next-glow-stars-info","next-glow-stars-info",213102936).cljs$core$IFn$_invoke$arity$1(state))], null);
});
first.core.draw_glow_circle = (function first$core$draw_glow_circle(x,y,size){
var seq__19790 = cljs.core.seq.call(null,cljs.core.reverse.call(null,cljs.core.range.call(null,(0),(30),(1))));
var chunk__19791 = null;
var count__19792 = (0);
var i__19793 = (0);
while(true){
if((i__19793 < count__19792)){
var size_inc = cljs.core._nth.call(null,chunk__19791,i__19793);
var color_19794 = ((220) - ((14) * cljs.core.quot.call(null,size_inc,(2))));
quil.core.fill.call(null,color_19794,color_19794,color_19794);

quil.core.stroke.call(null,color_19794,color_19794,color_19794);

quil.core.ellipse.call(null,x,y,(size + size_inc),(size + size_inc));


var G__19795 = seq__19790;
var G__19796 = chunk__19791;
var G__19797 = count__19792;
var G__19798 = (i__19793 + (1));
seq__19790 = G__19795;
chunk__19791 = G__19796;
count__19792 = G__19797;
i__19793 = G__19798;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__19790);
if(temp__5735__auto__){
var seq__19790__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19790__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__19790__$1);
var G__19799 = cljs.core.chunk_rest.call(null,seq__19790__$1);
var G__19800 = c__4550__auto__;
var G__19801 = cljs.core.count.call(null,c__4550__auto__);
var G__19802 = (0);
seq__19790 = G__19799;
chunk__19791 = G__19800;
count__19792 = G__19801;
i__19793 = G__19802;
continue;
} else {
var size_inc = cljs.core.first.call(null,seq__19790__$1);
var color_19803 = ((220) - ((14) * cljs.core.quot.call(null,size_inc,(2))));
quil.core.fill.call(null,color_19803,color_19803,color_19803);

quil.core.stroke.call(null,color_19803,color_19803,color_19803);

quil.core.ellipse.call(null,x,y,(size + size_inc),(size + size_inc));


var G__19804 = cljs.core.next.call(null,seq__19790__$1);
var G__19805 = null;
var G__19806 = (0);
var G__19807 = (0);
seq__19790 = G__19804;
chunk__19791 = G__19805;
count__19792 = G__19806;
i__19793 = G__19807;
continue;
}
} else {
return null;
}
}
break;
}
});
first.core.draw_glow_star = (function first$core$draw_glow_star(glow_star_info){
var map__19808 = glow_star_info;
var map__19808__$1 = (((((!((map__19808 == null))))?(((((map__19808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19808):map__19808);
var star = cljs.core.get.call(null,map__19808__$1,new cljs.core.Keyword(null,"star","star",279424429));
var line_size = cljs.core.get.call(null,map__19808__$1,new cljs.core.Keyword(null,"line-size","line-size",8517417));
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(star);
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(star);
var size = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(star);
var x_change = ((2) + cljs.core.quot.call(null,line_size,1.6));
var max_line_size = (size + line_size);
quil.core.fill.call(null,(100),(100),(100));

quil.core.stroke.call(null,(10),(10),(10));

first.core.draw_glow_circle.call(null,x,y,size);

quil.core.stroke.call(null,(200),(200),(200));

quil.core.line.call(null,(x - x_change),(y - max_line_size),(x + x_change),(y + max_line_size));

return quil.core.line.call(null,(x + x_change),(y - max_line_size),(x - x_change),(y + max_line_size));
});
first.core.draw_star = (function first$core$draw_star(star){
var map__19810_19812 = star;
var map__19810_19813__$1 = (((((!((map__19810_19812 == null))))?(((((map__19810_19812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19810_19812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19810_19812):map__19810_19812);
var x_19814 = cljs.core.get.call(null,map__19810_19813__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_19815 = cljs.core.get.call(null,map__19810_19813__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var max_line_size_19816 = cljs.core.get.call(null,map__19810_19813__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.stroke.call(null,(200),(200),(200));

quil.core.line.call(null,(x_19814 - (2)),(y_19815 - max_line_size_19816),(x_19814 + (2)),(y_19815 + max_line_size_19816));

quil.core.line.call(null,(x_19814 + (2)),(y_19815 - max_line_size_19816),(x_19814 - (2)),(y_19815 + max_line_size_19816));

return quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(star),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(star),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(star),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(star));
});
first.core.draw_state = (function first$core$draw_state(state){
quil.core.background.call(null,(10));

quil.core.smooth.call(null,(10));

quil.core.stroke.call(null,(240),(240),(240));

var seq__19817_19825 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"stars","stars",-556837771).cljs$core$IFn$_invoke$arity$1(state));
var chunk__19818_19826 = null;
var count__19819_19827 = (0);
var i__19820_19828 = (0);
while(true){
if((i__19820_19828 < count__19819_19827)){
var star_19829 = cljs.core._nth.call(null,chunk__19818_19826,i__19820_19828);
first.core.draw_star.call(null,star_19829);


var G__19830 = seq__19817_19825;
var G__19831 = chunk__19818_19826;
var G__19832 = count__19819_19827;
var G__19833 = (i__19820_19828 + (1));
seq__19817_19825 = G__19830;
chunk__19818_19826 = G__19831;
count__19819_19827 = G__19832;
i__19820_19828 = G__19833;
continue;
} else {
var temp__5735__auto___19834 = cljs.core.seq.call(null,seq__19817_19825);
if(temp__5735__auto___19834){
var seq__19817_19835__$1 = temp__5735__auto___19834;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19817_19835__$1)){
var c__4550__auto___19836 = cljs.core.chunk_first.call(null,seq__19817_19835__$1);
var G__19837 = cljs.core.chunk_rest.call(null,seq__19817_19835__$1);
var G__19838 = c__4550__auto___19836;
var G__19839 = cljs.core.count.call(null,c__4550__auto___19836);
var G__19840 = (0);
seq__19817_19825 = G__19837;
chunk__19818_19826 = G__19838;
count__19819_19827 = G__19839;
i__19820_19828 = G__19840;
continue;
} else {
var star_19841 = cljs.core.first.call(null,seq__19817_19835__$1);
first.core.draw_star.call(null,star_19841);


var G__19842 = cljs.core.next.call(null,seq__19817_19835__$1);
var G__19843 = null;
var G__19844 = (0);
var G__19845 = (0);
seq__19817_19825 = G__19842;
chunk__19818_19826 = G__19843;
count__19819_19827 = G__19844;
i__19820_19828 = G__19845;
continue;
}
} else {
}
}
break;
}

var seq__19821_19846 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"next-glow-stars-info","next-glow-stars-info",213102936).cljs$core$IFn$_invoke$arity$1(state));
var chunk__19822_19847 = null;
var count__19823_19848 = (0);
var i__19824_19849 = (0);
while(true){
if((i__19824_19849 < count__19823_19848)){
var glow_star_19850 = cljs.core._nth.call(null,chunk__19822_19847,i__19824_19849);
first.core.draw_glow_star.call(null,glow_star_19850);


var G__19851 = seq__19821_19846;
var G__19852 = chunk__19822_19847;
var G__19853 = count__19823_19848;
var G__19854 = (i__19824_19849 + (1));
seq__19821_19846 = G__19851;
chunk__19822_19847 = G__19852;
count__19823_19848 = G__19853;
i__19824_19849 = G__19854;
continue;
} else {
var temp__5735__auto___19855 = cljs.core.seq.call(null,seq__19821_19846);
if(temp__5735__auto___19855){
var seq__19821_19856__$1 = temp__5735__auto___19855;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19821_19856__$1)){
var c__4550__auto___19857 = cljs.core.chunk_first.call(null,seq__19821_19856__$1);
var G__19858 = cljs.core.chunk_rest.call(null,seq__19821_19856__$1);
var G__19859 = c__4550__auto___19857;
var G__19860 = cljs.core.count.call(null,c__4550__auto___19857);
var G__19861 = (0);
seq__19821_19846 = G__19858;
chunk__19822_19847 = G__19859;
count__19823_19848 = G__19860;
i__19824_19849 = G__19861;
continue;
} else {
var glow_star_19862 = cljs.core.first.call(null,seq__19821_19856__$1);
first.core.draw_glow_star.call(null,glow_star_19862);


var G__19863 = cljs.core.next.call(null,seq__19821_19856__$1);
var G__19864 = null;
var G__19865 = (0);
var G__19866 = (0);
seq__19821_19846 = G__19863;
chunk__19822_19847 = G__19864;
count__19823_19848 = G__19865;
i__19824_19849 = G__19866;
continue;
}
} else {
}
}
break;
}

var moon = new cljs.core.Keyword(null,"moon","moon",-1802945312).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(quil.core.loaded_QMARK_.call(null,new cljs.core.Keyword(null,"img","img",1442687358).cljs$core$IFn$_invoke$arity$1(moon)))){
return quil.core.image.call(null,new cljs.core.Keyword(null,"img","img",1442687358).cljs$core$IFn$_invoke$arity$1(moon),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(moon)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(moon)),(100),(100));
} else {
return null;
}
});
first.core.run_sketch = (function first$core$run_sketch(){
first.core.first = (function first$core$run_sketch_$_first(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"first",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,first.core.update_state))?(function() { 
var G__19867__delegate = function (args){
return cljs.core.apply.call(null,first.core.update_state,args);
};
var G__19867 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19868__i = 0, G__19868__a = new Array(arguments.length -  0);
while (G__19868__i < G__19868__a.length) {G__19868__a[G__19868__i] = arguments[G__19868__i + 0]; ++G__19868__i;}
  args = new cljs.core.IndexedSeq(G__19868__a,0,null);
} 
return G__19867__delegate.call(this,args);};
G__19867.cljs$lang$maxFixedArity = 0;
G__19867.cljs$lang$applyTo = (function (arglist__19869){
var args = cljs.core.seq(arglist__19869);
return G__19867__delegate(args);
});
G__19867.cljs$core$IFn$_invoke$arity$variadic = G__19867__delegate;
return G__19867;
})()
:first.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,first.core.setup))?(function() { 
var G__19870__delegate = function (args){
return cljs.core.apply.call(null,first.core.setup,args);
};
var G__19870 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19871__i = 0, G__19871__a = new Array(arguments.length -  0);
while (G__19871__i < G__19871__a.length) {G__19871__a[G__19871__i] = arguments[G__19871__i + 0]; ++G__19871__i;}
  args = new cljs.core.IndexedSeq(G__19871__a,0,null);
} 
return G__19870__delegate.call(this,args);};
G__19870.cljs$lang$maxFixedArity = 0;
G__19870.cljs$lang$applyTo = (function (arglist__19872){
var args = cljs.core.seq(arglist__19872);
return G__19870__delegate(args);
});
G__19870.cljs$core$IFn$_invoke$arity$variadic = G__19870__delegate;
return G__19870;
})()
:first.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,first.core.draw_state))?(function() { 
var G__19873__delegate = function (args){
return cljs.core.apply.call(null,first.core.draw_state,args);
};
var G__19873 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19874__i = 0, G__19874__a = new Array(arguments.length -  0);
while (G__19874__i < G__19874__a.length) {G__19874__a[G__19874__i] = arguments[G__19874__i + 0]; ++G__19874__i;}
  args = new cljs.core.IndexedSeq(G__19874__a,0,null);
} 
return G__19873__delegate.call(this,args);};
G__19873.cljs$lang$maxFixedArity = 0;
G__19873.cljs$lang$applyTo = (function (arglist__19875){
var args = cljs.core.seq(arglist__19875);
return G__19873__delegate(args);
});
G__19873.cljs$core$IFn$_invoke$arity$variadic = G__19873__delegate;
return G__19873;
})()
:first.core.draw_state));
});
goog.exportSymbol('first.core.first', first.core.first);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__1323__1324__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__1323__1324__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),first.core.first,new cljs.core.Keyword(null,"host-id","host-id",742376279),"first"], null));
}
});
goog.exportSymbol('first.core.run_sketch', first.core.run_sketch);

//# sourceMappingURL=core.js.map
