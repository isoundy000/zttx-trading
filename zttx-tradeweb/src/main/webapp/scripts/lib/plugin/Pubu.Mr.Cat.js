function PubuLiu(a,b){function c(){var a=0,b=p[0];for(var c in p)p[c]<b&&(b=p[c],a=c);return a}function d(){var a=0,b=p[0];for(var c in p)p[c]>b&&(b=p[c],a=b);return a}var e={trigger:null,autoWidth:!0,width:200,margin:2,column:4,childItem:"li",autoFill:!0,boxClass:""},f=$.extend(e,a),g=f.trigger;$(g).css({position:"relative"});for(var h=$(g).outerWidth(),i=f.autoWidth?h/f.column-f.margin:f.width,j=f.margin,k=f.column,l=f.childItem,m=f.boxClass,n=$(g).find(l).addClass(m).css({position:"absolute",width:i}).toArray(),o=0,p=new Array,q=0;k>q;q++)p.push(0);for(var q in n){var r=c();o=(i+j)*r,p[r]+=$(n[q]).css({left:o,top:p[r]}).innerHeight()+j}return $(g).css({height:d()}),this}PubuLiu.prototype.addItems=function(a){};