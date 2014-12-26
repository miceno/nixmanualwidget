/****************************************************************
 * Doubleclick simulator in JavaScript. 
 *   
 * DynImage991221
 * by Christiaan Hofman, December 1999
 *   
 * You may use or modify this code provided that this copyright notice
 * appears on all copies.
 *   
 *   
 *  Constructor:
 *    doubleclick = new DoubleClick( onDoubleClick [, onSingleClick, onSelect, onUnSelect, itemvar] );
 *    doubleclick = new DoubleClick( doubleclick2 );
 *  
 *  Methods:
 *    doubleclick.onClick( [i] );
 *    doubleclick.select( [i] );
 *    doubleclick.unselect();
 *   
 *  Default Initial Settings:   
 *    doubleclick.waitTime = 300;
 *    doubleclick.clicked = null;
 *    doubleclick.selected = null;
 ****************************************************************
 */

function onClick(i) {
  if ( i == undefined )  i = true;
  if ( this.clicked == i ) {
    this.onDoubleClick(i)
    this.clicked = null;
    this.selected = i;
  } 
  else {
    if (this.selected != null && this.selected != i)  this.onUnselect();
    this.onSelect(i);
    this.clicked = i;
    if ( typeof(i) == "string" )  i = "'"+i+"'";
    setTimeout("with ("+ this.theDoubleClick +") { if (clicked=="+i+") { onSingleClick("+i+"); clicked = null; selected = "+i+" } }", this.waitTime);
  }
}

function DoubleClick( onDoubleClick, onSingleClick, onSelect, onUnselect, itemvar ) {
  this.type = 'DoubleClick';
  this.clicked = null;
  this.selected  = null;
  this.onClick = onClick;
  if (onDoubleClick.type == 'DoubleClick') {
    var proto = onDoubleClick;    
    this.waitTime = proto.waitTime;
    this.onDoubleClick = proto.onDoubleClick;
    this.onSelect = proto.onSelect;
    this.onUnSelect = proto.onUnselect;
    this.onSingleClick = proto.onSingleClick;
    this.select = proto.select;
    this.unselect = proto.unselect;
  }
  else {
    itemvar = itemvar || 'i';
    this.waitTime = 300;
    this.onDoubleClick = new Function( itemvar, onDoubleClick );
    this.onSelect = ( onSelect )?  new Function( itemvar, onSelect ) : new Function( 'void(0)' );
    this.onUnselect = ( onUnselect )?  new Function( 'var '+itemvar+'=this.selected;'+ onUnselect ) : new Function( 'void(0)' );
    this.onSingleClick = ( onSingleClick )?  new Function( itemvar, onSingleClick ) : new Function( 'void(0)' );
    this.select = new Function( itemvar, (( onUnselect )?  'if (this.selected!=null){this.onUnselect()}' : '' ) +'if ('+itemvar+'==undefined) '+itemvar+'=true;' + (onSelect || '') + ';this.selected='+itemvar );
    this.unselect = new Function( 'if (this.selected!=null) {var '+itemvar+'=this.selected;' + (onUnselect || '') + ';this.selected=null}' );
 }
  if ( !window.doubleclicks )  window.doubleclicks = new Array();
  this.theDoubleClick = "doubleclicks["+ window.doubleclicks.length +"]";
  window.doubleclicks[ window.doubleclicks.length ] = this;
}

