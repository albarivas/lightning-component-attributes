public class MyContainerController
{
    @AuraEnabled
    public static Account getMyFavouriteAccount()
    {
        return [SELECT Name FROM Account LIMIT 1];
    }
    
    @AuraEnabled
    public static MyFavouriteClass getMyFavouriteInstance()
    {
       MyFavouriteClass myClass = new MyFavouriteClass();
       myClass.MyVar = 'I\'m awesome!';
       return myClass;
    }
 
}